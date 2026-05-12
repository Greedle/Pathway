const programSelect = document.getElementById('program-select');
const treeContainer = document.getElementById('tree');
const progressArea = document.getElementById('progress-area');

let totalaPoang = 0;
let betygLägeAktivt = false;

// 1. Fyll i rullistan
studieplaner.forEach(plan => {
    const opt = document.createElement('option');
    opt.value = plan.id;
    opt.innerText = plan.namn;
    programSelect.appendChild(opt);
});

// 2. Lyssna på byte av program
programSelect.addEventListener('change', (e) => {
    const valtId = e.target.value;
    const valdPlan = studieplaner.find(p => p.id === valtId);
    
    treeContainer.innerHTML = '';
    totalaPoang = 0;

    if (valdPlan) {
        progressArea.style.display = 'block';
        const betygBtn = document.getElementById('betyg-toggle-btn');
        if (betygBtn) betygBtn.style.display = 'inline-block';
        const sökInput = document.getElementById('sök-input');
        if (sökInput) { sökInput.style.display = 'inline-block'; sökInput.value = ''; }
        localStorage.setItem('valtProgram_v2', valtId);
        renderaExamenskrav(valdPlan);
        renderaProgramLänkar(valdPlan);
        renderaDiagram(valdPlan);
        laddaSparadeVal();
        laddaTillgodo();
        laddaBetyg();
        // Restore betyg mode
        const betygLägeSparat = localStorage.getItem('betygLäge');
        if (betygLägeSparat === '1') { betygLägeAktivt = false; toggleBetygLäge(); }
    } else {
        progressArea.style.display = 'none';
        progressArea.innerHTML = '';
        const betygBtnHide = document.getElementById('betyg-toggle-btn');
        if (betygBtnHide) betygBtnHide.style.display = 'none';
        const sökInputHide = document.getElementById('sök-input');
        if (sökInputHide) sökInputHide.style.display = 'none';
        const länkBtns = document.getElementById('program-länkar');
        if (länkBtns) länkBtns.innerHTML = '';
        localStorage.removeItem('valtProgram_v2');
    }
});

// ─── EXAMENSKRAV ──────────────────────────────────────────────────────────────

function renderaExamenskrav(plan) {
    progressArea.innerHTML = '';
    if (!plan.examenskrav) return;

    // Add grade average at the bottom of progress area
    const snittRad = document.createElement('div');
    snittRad.className = 'examenskrav-rad';
    snittRad.id = 'betyg-snitt-rad';
    snittRad.style.display = 'none';
    snittRad.innerHTML = `
        <div class="krav-label">
            <span class="krav-namn">Snittbetyg</span>
            <span class="krav-varden" id="total-betyg-snitt">—</span>
        </div>
    `;
    progressArea.appendChild(snittRad);

    plan.examenskrav.forEach(krav => {
        const rad = document.createElement('div');
        rad.className = 'examenskrav-rad';
        rad.setAttribute('data-krav-typ', krav.typ);

        if (krav.typ === 'min-hp') {
            rad.innerHTML = `
                <div class="krav-label">
                    <span class="krav-namn">${krav.beskrivning}</span>
                    <span class="krav-varden"><span id="krav-hp-nu">0</span> / ${krav.varde} hp</span>
                </div>
                <progress class="krav-bar" id="krav-bar-hp" value="0" max="${krav.varde}"></progress>
            `;
        } else if (krav.typ === 'alla-obligatoriska') {
            const totalt = plan.kurser.filter(k => k.obligatorisk).length;
            rad.innerHTML = `
                <div class="krav-label">
                    <span class="krav-namn">${krav.beskrivning}</span>
                    <span class="krav-varden"><span id="krav-oblig-nu">0</span> / ${totalt}</span>
                </div>
                <progress class="krav-bar" id="krav-bar-oblig" value="0" max="${totalt}"></progress>
            `;
        } else if (krav.typ === 'min-hp-avancerad') {
            rad.innerHTML = `
                <div class="krav-label">
                    <span class="krav-namn">${krav.beskrivning}</span>
                    <span class="krav-varden"><span id="krav-avancerad-nu">0</span> / ${krav.varde} hp</span>
                </div>
                <progress class="krav-bar" id="krav-bar-avancerad" value="0" max="${krav.varde}"></progress>
            `;
        }

        progressArea.appendChild(rad);
    });
}

function uppdateraExamenskrav() {
    const valdId = programSelect.value;
    const valdPlan = studieplaner.find(p => p.id === valdId);
    if (!valdPlan || !valdPlan.examenskrav) return;

    const avklaradeKoder = new Set(
        Array.from(document.querySelectorAll('.kurs-check:checked'))
            .map(cb => cb.getAttribute('data-kod'))
    );

    // Räkna total HP
    let totalHp = 0;
    const räknadeKoder = new Set();
    document.querySelectorAll('.kurs-check:checked').forEach(cb => {
        const kod = cb.getAttribute('data-kod');
        if (räknadeKoder.has(kod)) return;
        räknadeKoder.add(kod);
        const kursData = valdPlan.kurser.find(k => k.kod === kod);
        if (!kursData) return;
        if (kursData.alternativ) {
            const sel = document.querySelector(`.kurs-dropdown[data-parent-kod="${kod}"]`);
            if (sel && sel.getAttribute('data-spillover') === 'true') return;
            totalHp += parseFloat(sel?.selectedOptions[0]?.getAttribute('data-hp')) || 0;
        } else {
            totalHp += Object.values(kursData.hp_per_period).reduce((a, b) => a + b, 0);
        }
    });

    // Räkna avancerade HP
    let avanceradHp = 0;
    const räknadeAvancerade = new Set();
    document.querySelectorAll('.kurs-check:checked').forEach(cb => {
        const kod = cb.getAttribute('data-kod');
        if (räknadeAvancerade.has(kod)) return;
        räknadeAvancerade.add(kod);
        const kursData = valdPlan.kurser.find(k => k.kod === kod);
        if (!kursData) return;
        if (kursData.alternativ) {
            const sel = document.querySelector(`.kurs-dropdown[data-parent-kod="${kod}"]`);
            if (!sel || sel.getAttribute('data-spillover') === 'true') return;
            const altData = kursData.alternativ.find(a => a.kod === sel.value);
            if (altData?.avancerad) avanceradHp += altData.hp;
        } else if (kursData.avancerad) {
            avanceradHp += Object.values(kursData.hp_per_period).reduce((a, b) => a + b, 0);
        }
    });

    // Räkna obligatoriska klarade
    const obligatoriskaKoder = new Set(
        valdPlan.kurser.filter(k => k.obligatorisk).map(k => k.kod)
    );
    const klaradeObligatoriska = [...obligatoriskaKoder].filter(k => avklaradeKoder.has(k)).length;
    const totaltObligatoriska = obligatoriskaKoder.size;

    // Uppdatera varje kravs bar
    valdPlan.examenskrav.forEach(krav => {
        if (krav.typ === 'min-hp') {
            const nu = document.getElementById('krav-hp-nu');
            const bar = document.getElementById('krav-bar-hp');
            if (nu) nu.textContent = totalHp;
            if (bar) { bar.value = Math.min(totalHp, krav.varde); bar.classList.toggle('krav-uppfyllt', totalHp >= krav.varde); }
        } else if (krav.typ === 'alla-obligatoriska') {
            const nu = document.getElementById('krav-oblig-nu');
            const bar = document.getElementById('krav-bar-oblig');
            if (nu) nu.textContent = klaradeObligatoriska;
            if (bar) { bar.value = klaradeObligatoriska; bar.classList.toggle('krav-uppfyllt', klaradeObligatoriska >= totaltObligatoriska); }
        } else if (krav.typ === 'min-hp-avancerad') {
            const nu = document.getElementById('krav-avancerad-nu');
            const bar = document.getElementById('krav-bar-avancerad');
            if (nu) nu.textContent = avanceradHp;
            if (bar) { bar.value = Math.min(avanceradHp, krav.varde); bar.classList.toggle('krav-uppfyllt', avanceradHp >= krav.varde); }
        }
    });
}

// ─── DIAGRAM ──────────────────────────────────────────────────────────────────

function renderaDiagram(plan) {
    treeContainer.innerHTML = '';
    let allaP = [];
    plan.kurser.forEach(k => allaP.push(...k.perioder));
    const unikaPerioder = [...new Set(allaP)].sort((a, b) => a - b);
    const maxPeriod = Math.max(...unikaPerioder);
    const antalAr = Math.ceil(maxPeriod / 4);

    for (let ar = 1; ar <= antalAr; ar++) {
        const arDiv = document.createElement('div');
        arDiv.className = 'ar-container';
        arDiv.setAttribute('data-ar', ar);
        arDiv.innerHTML = `
            <div class="ar-header">
                <h2>År ${ar} <span class="ar-betyg-snitt" data-ar="${ar}" style="display:none;"></span></h2>
                <button class="view-btn" onclick="toggleArsVy(${ar})">Visa detaljerat</button>
            </div>
        `;

        const terminerWrapper = document.createElement('div');
        terminerWrapper.className = 'terminer-wrapper';
        
        for (let termin = 1; termin <= 2; termin++) {
            const terminNummer = (ar - 1) * 2 + termin;
            const tDiv = document.createElement('div');
            tDiv.className = 'termin-container';
            tDiv.setAttribute('data-termin', terminNummer);
            tDiv.innerHTML = `<h4>Termin ${terminNummer}</h4>`;
            
            const perioderWrapper = document.createElement('div');
            perioderWrapper.className = 'perioder-wrapper';

            for (let pInT = 1; pInT <= 2; pInT++) {
                const pNummer = (ar - 1) * 4 + (termin - 1) * 2 + pInT;
                const col = document.createElement('div');
                col.className = 'period-column';
                col.id = `period-${pNummer}`;
                col.innerHTML = `<h5>Period ${pNummer}</h5>`;
                perioderWrapper.appendChild(col);
            }
            tDiv.appendChild(perioderWrapper);
            terminerWrapper.appendChild(tDiv);
        }
        arDiv.appendChild(terminerWrapper);

        treeContainer.appendChild(arDiv);
    }

    plan.kurser.forEach(kurs => {
        kurs.perioder.forEach(p => {
            const targetCol = document.getElementById(`period-${p}`);
            if (!targetCol) return;

            const card = document.createElement('div');
            card.className = `kurs-card ${kurs.obligatorisk ? 'obligatorisk' : 'valbar-plats'}`;

            if (kurs.alternativ) {
                const terminNummer = Math.ceil(p / 2);
                const firstPeriodOfTermin = (terminNummer - 1) * 2 + 1;
                const isSecondPeriod = (p === firstPeriodOfTermin + 1);
                const slotHp = kurs.hp_per_period[p];

                let optionsHTML = kurs.alternativ.map(alt =>
                    `<option value="${alt.kod}" data-hp="${alt.hp}" data-avancerad="${alt.avancerad}" ${alt.synkad_med ? `data-synkad-med="${alt.synkad_med}"` : ''}>${alt.namn} (${alt.hp} hp${alt.avancerad ? ' · A' : ''})</option>`
                ).join('');

                card.draggable = true;
                card.innerHTML = `
                    <div class="kort-meny-wrapper">
                        <button class="kort-meny-btn" title="Alternativ">⋮</button>
                        <div class="kort-meny" hidden>
                            <button class="kort-meny-val" data-action="tillgodorankna">Tillgodoräkna</button>
                        </div>
                    </div>
                    <input type="checkbox" class="kurs-check" data-kod="${kurs.kod}">
                    <label><strong>Valbar (${slotHp} hp):</strong> ${kurs.namn}</label>
                    <div class="betyg-wrapper" style="display:none;">
                        <select class="betyg-select" data-kod="${kurs.kod}" data-ar="${Math.ceil(p / 4)}">
                            <option value="">— Betyg —</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="U">U (Underkänd)</option>
                        </select>
                    </div>
                    <select class="kurs-dropdown"
                            data-parent-kod="${kurs.kod}"
                            data-period="${p}"
                            data-termin="${terminNummer}"
                            data-is-second="${isSecondPeriod}">
                        <option value="0">-- Välj kurs --</option>
                        ${optionsHTML}
                    </select>
                `;
            } else {
                const delHp = kurs.hp_per_period[p];
                card.draggable = true;
                card.innerHTML = `
                    <div class="kort-meny-wrapper">
                        <button class="kort-meny-btn" title="Alternativ">⋮</button>
                        <div class="kort-meny" hidden>
                            <button class="kort-meny-val" data-action="tillgodorankna">Tillgodoräkna</button>
                        </div>
                    </div>
                    <input type="checkbox" class="kurs-check" data-kod="${kurs.kod}">
                    <label>
                        <strong>${kurs.namn}</strong><br>
                        <small>${kurs.kod} · ${delHp} hp${kurs.avancerad ? ' · <em>Avancerad</em>' : ''}</small>
                    </label>
                    <div class="betyg-wrapper" style="display:none;">
                        <select class="betyg-select" data-kod="${kurs.kod}" data-ar="${Math.ceil(p / 4)}">
                            <option value="">— Betyg —</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="U">U (Underkänd)</option>
                        </select>
                    </div>
                `;
            }

            const checkbox = card.querySelector('.kurs-check');
            const dropdown = card.querySelector('.kurs-dropdown');

            // Click anywhere on card to toggle checkbox (except menu area)
            card.addEventListener('click', (e) => {
                if (e.target.closest('.kort-meny-wrapper')) return;
                if (e.target.closest('.kurs-dropdown')) return;
                if (e.target.closest('.betyg-select')) return;
                if (e.target.closest('.tillgodo-form')) return;
                if (e.target === checkbox) return;

                const willBeChecked = !checkbox.checked;

                if (willBeChecked) {
                    card.classList.remove('skimmer');
                    void card.offsetWidth;
                    card.classList.add('skimmer');
                    card.addEventListener('animationend', () => card.classList.remove('skimmer'), { once: true });
                }

                checkbox.checked = willBeChecked;
                checkbox.dispatchEvent(new Event('change'));
            });

            checkbox.addEventListener('change', () => {
                const kod = checkbox.getAttribute('data-kod');
                const isChecked = checkbox.checked;

                document.querySelectorAll(`.kurs-check[data-kod="${kod}"]`).forEach(cb => {
                    cb.checked = isChecked;
                    const kortCard = cb.closest('.kurs-card');
                    kortCard?.classList.toggle('klarad', isChecked);
                    visaBetygPåKort(kortCard, isChecked);
                    // Shimmer synced sibling cards too
                    if (isChecked && kortCard && kortCard !== card) {
                        kortCard.classList.remove('skimmer');
                        void kortCard.offsetWidth;
                        kortCard.classList.add('skimmer');
                        kortCard.addEventListener('animationend', () => kortCard.classList.remove('skimmer'), { once: true });
                    }
                });

                if (dropdown) {
                    const parentKod = dropdown.getAttribute('data-parent-kod');
                    const isSecond = dropdown.getAttribute('data-is-second') === 'true';
                    const spilloverSource = dropdown.getAttribute('data-spillover-source');

                    if (!isSecond) {
                        document.querySelectorAll(`.kurs-dropdown[data-spillover-source="${parentKod}"]`).forEach(sp => {
                            const spCard = sp.closest('.kurs-card');
                            const spCheck = spCard?.querySelector('.kurs-check');
                            if (spCheck) spCheck.checked = isChecked;
                            if (spCard) {
                                spCard.classList.toggle('klarad', isChecked);
                                if (isChecked) {
                                    spCard.classList.remove('skimmer');
                                    void spCard.offsetWidth;
                                    spCard.classList.add('skimmer');
                                    spCard.addEventListener('animationend', () => spCard.classList.remove('skimmer'), { once: true });
                                }
                            }
                        });
                    } else if (spilloverSource) {
                        const srcSel = document.querySelector(`.kurs-dropdown[data-parent-kod="${spilloverSource}"]`);
                        const srcCard = srcSel?.closest('.kurs-card');
                        const srcCheck = srcCard?.querySelector('.kurs-check');
                        if (srcCheck) srcCheck.checked = isChecked;
                        if (srcCard) {
                            srcCard.classList.toggle('klarad', isChecked);
                            if (isChecked) {
                                srcCard.classList.remove('skimmer');
                                void srcCard.offsetWidth;
                                srcCard.classList.add('skimmer');
                                srcCard.addEventListener('animationend', () => srcCard.classList.remove('skimmer'), { once: true });
                            }
                        }
                    }
                }

                sparaVal();
            });

            if (dropdown) {
                dropdown.addEventListener('change', () => {
                    const t = parseInt(dropdown.getAttribute('data-termin'));
                    syncTermin(t);
                    sparaVal();
                });
            }

            // Betyg listener
            const betygSelect = card.querySelector('.betyg-select');
            if (betygSelect) {
                betygSelect.addEventListener('change', () => {
                    const kod = betygSelect.getAttribute('data-kod');
                    const val = betygSelect.value;
                    // Sync to all cards sharing the same kod
                    document.querySelectorAll(`.betyg-select[data-kod="${kod}"]`).forEach(sel => {
                        sel.value = val;
                    });
                    // Also sync to spillover partners
                    const parentDropdown = card.querySelector('.kurs-dropdown');
                    if (parentDropdown) {
                        const parentKod = parentDropdown.getAttribute('data-parent-kod');
                        const isSecond = parentDropdown.getAttribute('data-is-second') === 'true';
                        const spilloverSource = parentDropdown.getAttribute('data-spillover-source');
                        if (!isSecond) {
                            // Sync to spillover slots pointing back to this
                            document.querySelectorAll(`.kurs-dropdown[data-spillover-source="${parentKod}"]`).forEach(sp => {
                                sp.closest('.kurs-card')?.querySelectorAll('.betyg-select').forEach(sel => sel.value = val);
                            });
                        } else if (spilloverSource) {
                            // Sync back to source
                            document.querySelector(`.kurs-dropdown[data-parent-kod="${spilloverSource}"]`)
                                ?.closest('.kurs-card')?.querySelectorAll('.betyg-select').forEach(sel => sel.value = val);
                        }
                    }
                    sparaBetyg();
                    uppdateraAllaBetygSnitt();
                });
            }

            // Three-dots menu
            const menuBtn = card.querySelector('.kort-meny-btn');
            const menu = card.querySelector('.kort-meny');

            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close any other open menus
                document.querySelectorAll('.kort-meny').forEach(m => {
                    if (m !== menu) m.hidden = true;
                });
                menu.hidden = !menu.hidden;
            });

            // Close menu when clicking outside
            document.addEventListener('click', () => { menu.hidden = true; }, { capture: true, passive: true });

            card.querySelector('[data-action="tillgodorankna"]').addEventListener('click', (e) => {
                e.stopPropagation();
                menu.hidden = true;
                visaTillgodoForm(card);
            });

            targetCol.appendChild(card);
            aktiveraDragDrop(card, targetCol);
        });
    });
}

// ─── SYNC TERMIN ──────────────────────────────────────────────────────────────

function syncTermin(terminNummer) {
    const firstPeriodDropdowns = Array.from(document.querySelectorAll(
        `.kurs-dropdown[data-termin="${terminNummer}"][data-is-second="false"]`
    ));
    const secondPeriodDropdowns = Array.from(document.querySelectorAll(
        `.kurs-dropdown[data-termin="${terminNummer}"][data-is-second="true"]`
    ));

    const spillovers = [];
    firstPeriodDropdowns.forEach(sel => {
        const hp = parseFloat(sel.selectedOptions[0]?.getAttribute('data-hp')) || 0;
        const altKod = sel.value !== '0' ? sel.value : null;
        const synkadMed = sel.selectedOptions[0]?.getAttribute('data-synkad-med') || null;
        if (altKod && (hp === 10 || synkadMed)) {
            spillovers.push({ altKod: synkadMed || altKod, sourceKod: sel.getAttribute('data-parent-kod') });
        }
    });

    secondPeriodDropdowns.forEach(sel => {
        if (sel.getAttribute('data-spillover') === 'true') {
            sel.value = '0';
            sel.removeAttribute('data-spillover');
            sel.removeAttribute('data-spillover-source');
            sel.disabled = false;
            const card = sel.closest('.kurs-card');
            const check = card?.querySelector('.kurs-check');
            if (check) check.checked = false;
            card.querySelector('.spillover-lock')?.remove();
        }
    });

    const spilloverSlots = new Set();
    for (const { altKod, sourceKod } of spillovers) {
        const sourceSel = firstPeriodDropdowns.find(s => s.getAttribute('data-parent-kod') === sourceKod);
        const sourceCheck = sourceSel?.closest('.kurs-card')?.querySelector('.kurs-check');

        for (const sel of secondPeriodDropdowns) {
            if (spilloverSlots.has(sel)) continue;
            const matchingOption = Array.from(sel.options).find(opt => opt.value === altKod);
            if (matchingOption) {
                sel.value = altKod;
                sel.setAttribute('data-spillover', 'true');
                sel.setAttribute('data-spillover-source', sourceKod);
                sel.disabled = true;
                const card = sel.closest('.kurs-card');
                const check = card?.querySelector('.kurs-check');
                if (check) check.checked = true;
                if (sourceCheck) sourceCheck.checked = true;
                if (!card.querySelector('.spillover-lock')) {
                    const lock = document.createElement('small');
                    lock.className = 'spillover-lock';
                    lock.style.cssText = 'display:block;margin-top:4px;color:#888;';
                    lock.textContent = '🔒 Synkad med period 1';
                    card.appendChild(lock);
                }
                spilloverSlots.add(sel);
                break;
            }
        }
    }

    const MAX_HP = 15;
    let usedHp = 0;
    firstPeriodDropdowns.forEach(sel => {
        const card = sel.closest('.kurs-card');
        const check = card?.querySelector('.kurs-check');
        if (check && check.checked) {
            usedHp += parseFloat(sel.selectedOptions[0]?.getAttribute('data-hp')) || 0;
        }
    });
    const remainingCap = MAX_HP - usedHp;
    firstPeriodDropdowns.forEach(sel => {
        const card = sel.closest('.kurs-card');
        const check = card?.querySelector('.kurs-check');
        if (check && check.checked) return;
        const thisHp = parseFloat(sel.selectedOptions[0]?.getAttribute('data-hp')) || 0;
        if (thisHp > remainingCap) sel.value = '0';
        sel.style.display = '';
        card.querySelector('.termin-full-msg')?.remove();
    });

    const selectedInFirstPeriod = new Set();
    const selectedInSecondPeriod = new Set();
    firstPeriodDropdowns.forEach(sel => { if (sel.value !== '0') selectedInFirstPeriod.add(sel.value); });
    secondPeriodDropdowns.forEach(sel => { if (sel.value !== '0') selectedInSecondPeriod.add(sel.value); });

    firstPeriodDropdowns.forEach(sel => {
        Array.from(sel.options).forEach(opt => {
            if (opt.value === '0') return;
            const takenElsewhere = opt.value !== sel.value && selectedInFirstPeriod.has(opt.value);
            opt.disabled = takenElsewhere;
            opt.style.color = takenElsewhere ? '#aaa' : '';
        });
    });

    // Collect all course codes available in first-period dropdowns
    // A 10hp course in period 2 should only be grayed if it's also a spillover candidate
    // (i.e. it exists in a first-period dropdown) — standalone 10hp period-2 courses stay available
    const spilloverCandidates = new Set();
    firstPeriodDropdowns.forEach(sel => {
        Array.from(sel.options).forEach(opt => {
            const synkadMed = opt.getAttribute('data-synkad-med');
            if (synkadMed) spilloverCandidates.add(synkadMed);
            const hp = parseFloat(opt.getAttribute('data-hp')) || 0;
            if (hp === 10) spilloverCandidates.add(opt.value);
        });
    });

    secondPeriodDropdowns.forEach(sel => {
        if (spilloverSlots.has(sel)) return;
        Array.from(sel.options).forEach(opt => {
            if (opt.value === '0') return;
            const hp = parseFloat(opt.getAttribute('data-hp')) || 0;
            const takenElsewhere = opt.value !== sel.value && selectedInSecondPeriod.has(opt.value);
            // Only gray 10hp if it's a spillover candidate — not if it's a standalone period-2 course
            const isSpilloverCandidate = spilloverCandidates.has(opt.value);
            const shouldGray = takenElsewhere || (hp === 10 && isSpilloverCandidate);
            opt.disabled = shouldGray;
            opt.style.color = shouldGray ? '#aaa' : '';
        });
    });
}

function syncAllaTerminer() {
    const terminer = new Set(
        Array.from(document.querySelectorAll('.kurs-dropdown[data-termin]'))
            .map(s => s.getAttribute('data-termin'))
    );
    terminer.forEach(t => syncTermin(parseInt(t)));
}

// ─── SPARA / LADDA ────────────────────────────────────────────────────────────

function sparaVal() {
    const valdaKoder = Array.from(document.querySelectorAll('.kurs-check:checked'))
        .map(cb => cb.getAttribute('data-kod'));
    const dropdownStatus = {};
    document.querySelectorAll('.kurs-dropdown').forEach(select => {
        if (select.getAttribute('data-is-second') === 'true') return;
        dropdownStatus[select.getAttribute('data-parent-kod')] = select.value;
    });

    localStorage.setItem('studieKoll_v2_data', JSON.stringify({ koder: valdaKoder, dropdowns: dropdownStatus }));
    recalculateTotal();
}

function laddaSparadeVal() {
    const sparadRaw = localStorage.getItem('studieKoll_v2_data');
    if (!sparadRaw) return;
    let sparadData;
    try { sparadData = JSON.parse(sparadRaw); }
    catch { localStorage.removeItem('studieKoll_v2_data'); return; }

    if (sparadData.dropdowns) {
        for (const [parentKod, varde] of Object.entries(sparadData.dropdowns)) {
            const sel = document.querySelector(`.kurs-dropdown[data-parent-kod="${parentKod}"]`);
            if (!sel || sel.getAttribute('data-is-second') === 'true') continue;
            sel.value = varde;
        }
        syncAllaTerminer();
    }

    if (sparadData.koder) {
        sparadData.koder.forEach(kod => {
            document.querySelectorAll(`.kurs-check[data-kod="${kod}"]`).forEach(cb => {
                cb.checked = true;
                cb.closest('.kurs-card')?.classList.add('klarad');
            });
        });
    }

    recalculateTotal();
}

// ─── BERÄKNINGAR ─────────────────────────────────────────────────────────────

function recalculateTotal() {
    const valdId = programSelect.value;
    const valdPlan = studieplaner.find(p => p.id === valdId);
    if (!valdPlan) return;

    uppdateraExamenskrav();
    kontrolleraKrav();
}

function kontrolleraKrav() {
    const valdId = programSelect.value;
    const valdPlan = studieplaner.find(p => p.id === valdId);
    if (!valdPlan) return;

    const avklaradeKoder = Array.from(document.querySelectorAll('.kurs-check:checked'))
        .map(cb => cb.getAttribute('data-kod'));

    document.querySelectorAll('.kurs-card').forEach(card => {
        const check = card.querySelector('.kurs-check');
        if (!check) return;
        const kod = check.getAttribute('data-kod');
        const kursData = valdPlan.kurser.find(k => k.kod === kod);

        if (kursData && kursData.krav) {
            let varningar = [];
            kursData.krav.forEach(kravObj => {
                if (!avklaradeKoder.includes(kravObj.kod)) {
                    varningar.push(`Kräver ${kravObj.typ}: ${kravObj.kod}`);
                }
            });
            uppdateraKortVarning(card, varningar);
        }
    });
}

function uppdateraKortVarning(card, varningar) {
    let vBox = card.querySelector('.krav-container') || document.createElement('div');
    vBox.className = 'krav-container';
    if (!card.querySelector('.krav-container')) card.appendChild(vBox);

    if (varningar.length > 0) {
        card.classList.add('har-varning');
        vBox.innerHTML = varningar.map(v => `<div class="v-text">⚠️ ${v}</div>`).join('');
    } else {
        card.classList.remove('har-varning');
        vBox.innerHTML = '';
    }
}

// ─── TILLGODORÄKNING ─────────────────────────────────────────────────────────

function visaTillgodoForm(card) {
    // If already tillgodoräknad, remove it instead
    if (card.classList.contains('tillgodoräknad')) {
        taBortTillgodo(card);
        return;
    }
    // Don't show form twice
    if (card.querySelector('.tillgodo-form')) return;

    const form = document.createElement('div');
    form.className = 'tillgodo-form';
    form.innerHTML = `
        <small style="display:block;margin-bottom:4px;color:#555;">Ange kurs som tillgodoräknas:</small>
        <input class="tillgodo-input" type="text" placeholder="T.ex. MATA21 Linjär Algebra">
        <div style="display:flex;gap:6px;margin-top:6px;">
            <button class="tillgodo-ok-btn">Bekräfta</button>
            <button class="tillgodo-avbryt-btn">Avbryt</button>
        </div>
    `;

    card.appendChild(form);
    form.querySelector('.tillgodo-input').focus();

    form.querySelector('.tillgodo-avbryt-btn').addEventListener('click', () => form.remove());

    form.querySelector('.tillgodo-ok-btn').addEventListener('click', () => {
        const kursnamn = form.querySelector('.tillgodo-input').value.trim();
        if (!kursnamn) return;
        bekräftaTillgodo(card, kursnamn);
        form.remove();
    });

    // Also confirm on Enter
    form.querySelector('.tillgodo-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') form.querySelector('.tillgodo-ok-btn').click();
        if (e.key === 'Escape') form.remove();
    });
}

function bekräftaTillgodo(card, kursnamn) {
    card.classList.add('tillgodoräknad', 'klarad');

    // Check the checkbox
    const check = card.querySelector('.kurs-check');
    if (check) {
        check.checked = true;
        check.dispatchEvent(new Event('change'));
    }

    // Add badge
    let badge = card.querySelector('.tillgodo-badge');
    if (!badge) {
        badge = document.createElement('small');
        badge.className = 'tillgodo-badge';
        card.appendChild(badge);
    }
    badge.innerHTML = `✅ Tillgodoräknad: <em>${kursnamn}</em> <button class="tillgodo-ta-bort" title="Ta bort">✕</button>`;
    badge.querySelector('.tillgodo-ta-bort').addEventListener('click', () => taBortTillgodo(card));

    // Update menu button label
    const menuBtn = card.querySelector('[data-action="tillgodorankna"]');
    if (menuBtn) menuBtn.textContent = 'Ta bort tillgodoräkning';

    sparaTillgodo();
}

function taBortTillgodo(card) {
    card.classList.remove('tillgodoräknad');
    card.querySelector('.tillgodo-badge')?.remove();

    const menuBtn = card.querySelector('[data-action="tillgodorankna"]');
    if (menuBtn) menuBtn.textContent = 'Tillgodoräkna';

    // Uncheck
    const check = card.querySelector('.kurs-check');
    if (check) {
        check.checked = false;
        check.dispatchEvent(new Event('change'));
    }

    sparaTillgodo();
}

function sparaTillgodo() {
    const tillgodo = {};
    document.querySelectorAll('.kurs-card.tillgodoräknad').forEach(card => {
        const kod = card.querySelector('.kurs-check')?.getAttribute('data-kod');
        const kursnamn = card.querySelector('.tillgodo-badge em')?.textContent;
        if (kod && kursnamn) tillgodo[kod] = kursnamn;
    });
    localStorage.setItem('studieKoll_tillgodo', JSON.stringify(tillgodo));
}

function laddaTillgodo() {
    const raw = localStorage.getItem('studieKoll_tillgodo');
    if (!raw) return;
    let tillgodo;
    try { tillgodo = JSON.parse(raw); } catch { return; }

    for (const [kod, kursnamn] of Object.entries(tillgodo)) {
        const card = document.querySelector(`.kurs-check[data-kod="${kod}"]`)?.closest('.kurs-card');
        if (card) bekräftaTillgodo(card, kursnamn);
    }
}

// ─── BETYG ───────────────────────────────────────────────────────────────────

function toggleBetygLäge() {
    betygLägeAktivt = !betygLägeAktivt;
    const btn = document.getElementById('betyg-toggle-btn');
    if (btn) {
        btn.textContent = betygLägeAktivt ? '★ Dölj betyg' : '★ Visa betyg';
        btn.classList.toggle('betyg-toggle-aktiv', betygLägeAktivt);
    }

    // Show/hide betyg inputs on checked cards only
    document.querySelectorAll('.kurs-card').forEach(card => {
        const check = card.querySelector('.kurs-check');
        const betygWrapper = card.querySelector('.betyg-wrapper');
        if (!betygWrapper) return;
        const isChecked = check && check.checked;
        betygWrapper.style.display = (betygLägeAktivt && isChecked) ? 'block' : 'none';
    });

    // Show/hide snitt displays
    document.querySelectorAll('.ar-betyg-snitt').forEach(el => {
        el.style.display = betygLägeAktivt ? 'inline' : 'none';
    });
    const snittRad = document.getElementById('betyg-snitt-rad');
    if (snittRad) snittRad.style.display = betygLägeAktivt ? 'flex' : 'none';

    uppdateraAllaBetygSnitt();
    localStorage.setItem('betygLäge', betygLägeAktivt ? '1' : '0');
}

function visaBetygPåKort(card, visa) {
    const betygWrapper = card.querySelector('.betyg-wrapper');
    if (!betygWrapper) return;
    betygWrapper.style.display = (betygLägeAktivt && visa) ? 'block' : 'none';
}

function uppdateraAllaBetygSnitt() {
    if (!betygLägeAktivt) return;

    // Total snitt
    const totalSnitt = räknaBetygSnitt(document.querySelectorAll('.betyg-select'));
    const totalEl = document.getElementById('total-betyg-snitt');
    if (totalEl) {
        totalEl.textContent = totalSnitt !== null ? totalSnitt.toFixed(2) : '—';
    }

    // Per år
    const antalAr = document.querySelectorAll('.ar-container').length;
    for (let ar = 1; ar <= antalAr; ar++) {
        const arSelects = document.querySelectorAll(`.betyg-select[data-ar="${ar}"]`);
        const snitt = räknaBetygSnitt(arSelects);
        const arEl = document.querySelector(`.ar-betyg-snitt[data-ar="${ar}"]`);
        if (arEl) {
            arEl.textContent = snitt !== null ? `Snitt: ${snitt.toFixed(2)}` : 'Snitt: —';
        }
    }
}

function räknaBetygSnitt(selects) {
    const numericMap = { '5': 5, '4': 4, '3': 3, 'U': 0 };
    let summa = 0;
    let antal = 0;
    selects.forEach(sel => {
        const val = sel.value;
        if (val && val !== '' && numericMap[val] !== undefined) {
            // Only count if the card is checked and not a spillover
            const card = sel.closest('.kurs-card');
            const check = card?.querySelector('.kurs-check');
            const dropdown = card?.querySelector('.kurs-dropdown');
            if (!check?.checked) return;
            if (dropdown?.getAttribute('data-spillover') === 'true') return;
            if (val !== 'U') { // U doesn't count in average, only marks failure
                summa += numericMap[val];
                antal++;
            }
        }
    });
    return antal > 0 ? summa / antal : null;
}

function sparaBetyg() {
    const betyg = {};
    document.querySelectorAll('.betyg-select').forEach(sel => {
        if (sel.value) betyg[sel.getAttribute('data-kod')] = sel.value;
    });
    localStorage.setItem('studieKoll_betyg', JSON.stringify(betyg));
}

function laddaBetyg() {
    const raw = localStorage.getItem('studieKoll_betyg');
    if (!raw) return;
    let betyg;
    try { betyg = JSON.parse(raw); } catch { return; }
    for (const [kod, val] of Object.entries(betyg)) {
        document.querySelectorAll(`.betyg-select[data-kod="${kod}"]`).forEach(sel => {
            sel.value = val;
        });
    }
    uppdateraAllaBetygSnitt();
}

// ─── DRAG AND DROP ───────────────────────────────────────────────────────────

let dragSrcCard = null;

function aktiveraDragDrop(card, col) {
    card.addEventListener('dragstart', (e) => {
        // Only allow drag from the handle
        dragSrcCard = card;
        card.classList.add('dras');
        e.dataTransfer.effectAllowed = 'move';
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dras');
        document.querySelectorAll('.kurs-card.drag-over').forEach(c => c.classList.remove('drag-over'));
        dragSrcCard = null;
    });

    card.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!dragSrcCard || dragSrcCard === card) return;
        // Only allow drop within the same period column
        if (!card.closest('.period-column').contains(dragSrcCard) &&
            card.closest('.period-column') !== dragSrcCard.closest('.period-column')) return;
        e.dataTransfer.dropEffect = 'move';
        card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', () => {
        card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.remove('drag-over');
        if (!dragSrcCard || dragSrcCard === card) return;

        const srcCol = dragSrcCard.closest('.period-column');
        const dstCol = card.closest('.period-column');
        if (srcCol !== dstCol) return; // only within same period

        // Insert dragSrcCard before or after card depending on position
        const cards = [...dstCol.querySelectorAll('.kurs-card')];
        const srcIdx = cards.indexOf(dragSrcCard);
        const dstIdx = cards.indexOf(card);

        if (srcIdx < dstIdx) {
            dstCol.insertBefore(dragSrcCard, card.nextSibling);
        } else {
            dstCol.insertBefore(dragSrcCard, card);
        }
    });
}

// ─── PROGRAM-LÄNKAR ──────────────────────────────────────────────────────────

function renderaProgramLänkar(plan) {
    let container = document.getElementById('program-länkar');
    if (!container) return;
    container.innerHTML = '';
    if (plan.studieplan_url) {
        const a = document.createElement('a');
        a.href = plan.studieplan_url;
        a.target = '_blank';
        a.className = 'program-länk-btn';
        a.textContent = 'Studieplan ↗';
        container.appendChild(a);
    }
    if (plan.utbildningsplan_url) {
        const a = document.createElement('a');
        a.href = plan.utbildningsplan_url;
        a.target = '_blank';
        a.className = 'program-länk-btn';
        a.textContent = 'Utbildningsplan ↗';
        container.appendChild(a);
    }
}


// ─── SÖKFUNKTION ──────────────────────────────────────────────────────────────

function sök(query) {
    const q = query.trim().toLowerCase();
    document.querySelectorAll('.kurs-card').forEach(card => {
        if (!q) {
            card.style.opacity = '';
            card.style.outline = '';
            return;
        }
        const text = card.textContent.toLowerCase();
        const match = text.includes(q);
        card.style.opacity = match ? '1' : '0.2';
        card.style.outline = match ? '2px solid var(--accent)' : '';
    });

    // Show/hide period columns based on whether they have any matches
    document.querySelectorAll('.period-column').forEach(col => {
        if (!q) { col.style.opacity = ''; return; }
        const hasMatch = [...col.querySelectorAll('.kurs-card')].some(card =>
            card.textContent.toLowerCase().includes(q)
        );
        col.style.opacity = hasMatch ? '1' : '0.5';
    });
}

// ─── UPPSTART ─────────────────────────────────────────────────────────────────

const senastValtProgram = localStorage.getItem('valtProgram_v2');
if (senastValtProgram) {
    programSelect.value = senastValtProgram;
    programSelect.dispatchEvent(new Event('change'));
}