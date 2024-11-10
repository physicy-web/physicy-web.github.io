window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

document.addEventListener('DOMContentLoaded', function () {

    // Fungsi untuk membuka tooltip utama
    function openTooltip() {
        document.querySelectorAll('.simulation-choice').forEach(choice => {
            choice.addEventListener('click', (event) => {
                // Hentikan event bubbling
                event.stopPropagation();
                newtonstyle = 0;
                n1s = 0;
                n2s = 0;
                n3s = 0;
                // Tutup semua tooltip utama dan tooltip-secondary hanya jika name-material yang diklik
                if (event.target.classList.contains('container-choice')) {
                    closeAllTooltips();  // Menutup semua tooltip jika name-material diklik
                }

                if (event.target.classList.contains('name-material')) {
                    closeAllTooltips();  // Menutup semua tooltip jika name-material diklik
                }

                // Tampilkan tooltip utama (tooltip)
                const tooltip = choice.querySelector('.tooltip');
                const newtonbox = choice.querySelector('.newton-container');
                const force = choice.querySelector('.tooltip-secondary');
                if (tooltip && tooltip.style.display !== 'block') {
                    tooltip.style.display = 'block';
                }

                // Cari dan buka tooltip-secondary jika ada
                const forceText = tooltip.querySelector('.force');
                if (forceText) {
                    forceText.addEventListener('click', (forceEvent) => {
                        forceEvent.stopPropagation();
                        const secondaryTooltipp = choice.querySelector('.tooltip-secondary');
                        if (secondaryTooltipp) {
                            secondaryTooltipp.style.display = 'block'; // Tampilkan tooltip-secondary
                        }
                    });
                }

                const newtonText = tooltip.querySelector('.newton');
                if (newtonText) {
                    newtonText.addEventListener('click', (forceEvent) => {
                        forceEvent.stopPropagation();
                        const secondaryTooltip = choice.querySelector('.newton-container');
                        if (secondaryTooltip) {
                            secondaryTooltip.style.display = 'block'; // Tampilkan tooltip-secondary
                        }
                    });
                }

                const friction = force.querySelector('.friction');
                if (friction) {
                    friction.addEventListener('click', (forceEvent) => {
                        forceEvent.stopPropagation();
                        const forceone = choice.querySelector('.friction-force');
                        if (forceone) {
                            forceone.style.display = 'block'; // Tampilkan tooltip-secondary
                        }
                    });
                }

                const newton1Text = newtonbox.querySelector('.first');
                if (newton1Text) {
                    newton1Text.addEventListener('click', (forceEvent) => {
                        forceEvent.stopPropagation();
                        const secondaryTooltip2 = choice.querySelector('.first-newton');
                        const movetoup = choice.querySelector('.newton-container');
                        if (secondaryTooltip2) {
                            secondaryTooltip2.style.display = 'block'; // Tampilkan tooltip-secondary
                            movetoup.style.marginTop = "-57px";
                            if (n3s > 1){
                                secondaryTooltip2.classList.add("style-newton-two");
                                secondaryTooltip2.style.marginTop = "-28px";
                                secondaryTooltip2.style.left = "-422px";
                                secondaryTooltip2.style.width = "190px";
                            }else {
                            if (newtonstyle == 0){
                                secondaryTooltip2.classList.add("style-newton-one");
                                newtonstyle += 1;
                                n1s += 1;
                            } else if (newtonstyle == 1){
                                secondaryTooltip2.classList.add("style-newton-two");
                                secondaryTooltip2.style.left = "-422px";
                                secondaryTooltip2.style.width = "190px";
                                newtonstyle += 1;
                                n1s += 2;
                            }
                            }
                        }
                    });
                }

                const newton2Text = newtonbox.querySelector('.second');
                if (newton2Text) {
                    newton2Text.addEventListener('click', (forceEvent) => {
                        forceEvent.stopPropagation();
                        const secondaryTooltip3 = choice.querySelector('.second-newton');
                        const movetoup = choice.querySelector('.newton-container');
                        if (secondaryTooltip3) {
                            secondaryTooltip3.style.display = 'block'; // Tampilkan tooltip-secondary
                            movetoup.style.marginTop = "-57px";
                            if (n3s > 1){
                                secondaryTooltip3.classList.add("style-newton-three");
                            } else if (n3s == 2){
                                secondaryTooltip3.classList.add("style-newton-three");
                            }else{
                            if (newtonstyle == 0){
                                secondaryTooltip3.classList.add("style-newton-one");
                                newtonstyle += 1;
                                n2s += 1;
                            } else if (newtonstyle == 1){
                                secondaryTooltip3.classList.add("style-newton-two");
                                newtonstyle += 1;
                                n2s += 2;
                            }
                            }
                        }
                    });
                }

                const newton3Text = newtonbox.querySelector('.third');
                if (newton3Text) {
                    newton3Text.addEventListener('click', (forceEvent) => {
                        forceEvent.stopPropagation();
                        const newton1 = choice.querySelector('.first-newton');
                        const newton2 = choice.querySelector('.second-newton');
                        const newton3 = choice.querySelector('.third-newton');
                        newton3.style.display = 'block';
                        newton3.style.left = "-422px";
                        const movetoup = choice.querySelector('.newton-container');
                        
                        if (n1s == 1){
                            newton1.classList.remove("style-newton-one");
                            newton1.classList.add("style-newton-two");
                            newton1.style.marginTop = "-28px";
                            newton1.style.left = "-422px";
                            newton1.style.width = "190px";
                            newton3.classList.add("style-newton-one");
                            n3s += 2;

                            if(n2s == 1){
                                newton2.classList.add("style-newton-three");
                                newton3.classList.add("style-newton-one");
                                movetoup.style.marginTop = "-57px";
                            } else if (n2s > 2){
                                newton2.classList.remove("style-newton-two");
                                newton2.classList.add("style-newton-three");
                                newton3.classList.add("style-newton-one");
                                movetoup.style.marginTop = "-57px";
                            }
                        } else{
                            newton1.style.marginTop = "-28px";
                            newton1.style.left = "-422px";
                            newton1.style.width = "190px";
                            if(n2s == 1){
                                newton2.classList.remove("style-newton-one");
                                newton2.classList.add("style-newton-three");
                                newton3.classList.add("style-newton-one");
                                movetoup.style.marginTop = "-57px";
                            } else if (n2s == 2){
                                newton2.classList.remove("style-newton-two");
                                newton2.classList.add("style-newton-three");
                                newton3.classList.add("style-newton-one");
                                movetoup.style.marginTop = "-57px";
                            } else{
                                movetoup.style.marginTop = "-57px";
                                newton3.classList.add("style-newton-one");
                                n3s += 1;
                            }
                        }
                       
                    });
                }
            });
        });
    }

    // Fungsi untuk menutup semua tooltip
    function closeAllTooltips() {
        document.querySelectorAll('.tooltip').forEach(tip => {
            tip.style.display = 'none';
        });
        document.querySelectorAll('.tooltip-secondary').forEach(tip => {
            tip.style.display = 'none';
        });
        document.querySelectorAll('.newton-container').forEach(tip => {
            tip.style.display = 'none';
        });
        document.querySelectorAll('.first-newton').forEach(tip => {
            tip.style.display = 'none';
        });
        document.querySelectorAll('.second-newton').forEach(tip => {
            tip.style.display = 'none';
        });
        document.querySelectorAll('.third-newton').forEach(tip => {
            tip.style.display = 'none';
        });
    }
    
    function masterclose() {
        document.querySelectorAll('.close-btn').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();  // Menghentikan event agar tidak bubble ke parent
    
                // Mencari elemen-elemen tooltip yang mungkin ada
                const tooltip = event.target.closest('.tooltip');
                const secondaryTooltip = event.target.closest('.tooltip-secondary');
                const newtonTooltip = event.target.closest('.newton-container');
                const newton1Tooltip = event.target.closest('.first-newton');
                const newton2Tooltip = event.target.closest('.second-newton');
                const newton3Tooltip = event.target.closest('.third-newton');
    
                // Menyembunyikan tooltip yang ditemukan
                if (tooltip) {
                    tooltip.style.display = 'none';
                }
                if (secondaryTooltip) {
                    secondaryTooltip.style.display = 'none';
                }
                if (newtonTooltip) {
                    newtonTooltip.style.display = 'none';
                    newtonTooltip.style.marginTop = '0px';
                }
                if (newton1Tooltip) {
                    newton1Tooltip.style.display = 'none';
                }

                if (newton2Tooltip) {
                    newton2Tooltip.style.display = 'none';
                }

                if (newton3Tooltip) {
                    newton3Tooltip.style.display = 'none';
                }
    
                // Menutup semua tooltip sekaligus, jika ada
                document.querySelectorAll('.tooltip, .tooltip-secondary, .newton-container, .first-newton .second-newton .third-newton').forEach(t => {
                    t.style.display = 'none';
                });
            });
        });
    }
    
    // Fungsi untuk menutup tooltip ketika tombol close (X) diklik
    function closeTooltip() {
        document.querySelectorAll('.close-btn').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const tooltip = event.target.closest('.tooltip');
                if (tooltip) {
                    tooltip.style.display = 'none';
                }
            });
        });

        document.querySelectorAll('.close-btn-secondary').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const secondaryTooltip = event.target.closest('.tooltip-secondary');
                if (secondaryTooltip) {
                    secondaryTooltip.style.display = 'none';
                }
            });
        });

        document.querySelectorAll('.close-btn-secondary').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const NewtonTooltip = event.target.closest('.newton-container');
                if (NewtonTooltip) {
                    NewtonTooltip.style.display = 'none';
                }
            });
        });

        document.querySelectorAll('.close-btn-secondary').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const Newton1Tooltip = event.target.closest('.first-newton');
                if (Newton1Tooltip) {
                    Newton1Tooltip.style.display = 'none';
                }
            });
        });

        document.querySelectorAll('.close-btn-secondary').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const Newton2Tooltip = event.target.closest('.second-newton');
                if (Newton2Tooltip) {
                    Newton2Tooltip.style.display = 'none';
                }
            });
        });

        document.querySelectorAll('.close-btn-secondary').forEach(closeBtn => {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const Newton3Tooltip = event.target.closest('.third-newton');
                if (Newton3Tooltip) {
                    Newton3Tooltip.style.display = 'none';
                }
            });
        });
    }

    // Fungsi untuk menutup tooltip jika klik di luar tooltip

    // Menjalankan semua fungsi
    openTooltip();
    closeTooltip();
    masterclose();
});
