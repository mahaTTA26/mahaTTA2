// هذا السطر يضمن أن الكود لن يعمل إلا بعد تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. العثور على جميع مشغلات الصوت في الصفحة
    const allAudios = document.querySelectorAll('audio');

    // 2. إضافة "مراقب" لكل مشغل صوت
    allAudios.forEach(audio => {
        audio.addEventListener('play', () => {
            
            // 3. عندما تبدأ أغنية بالعمل، نمر على كل الأغاني الأخرى ونوقفها
            allAudios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();      // إيقاف الأغنية
                    otherAudio.currentTime = 0; // إعادة الأغنية للبداية (اختياري)
                }
            });
            
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const allAudios = document.querySelectorAll('audio');

    allAudios.forEach(audio => {
        // العثور على الصورة الموجودة داخل نفس مربع الأغنية
        const card = audio.closest('.song-card');
        const img = card.querySelector('.album-art');

        // عند التشغيل
        audio.addEventListener('play', () => {
            // أوقف أي أغنية أخرى (كودك القديم)
            allAudios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
            
            // تشغيل دوران الصورة لهذه الأغنية فقط
            img.classList.add('playing');
        });

        // عند الإيقاف المؤقت أو انتهاء الأغنية
        audio.addEventListener('pause', () => {
            img.classList.remove('playing');
        });
        
        audio.addEventListener('ended', () => {
            img.classList.remove('playing');
        });
    });
});

function unlockGallery() {
    // إظهار نافذة إدخال كلمة السر
    let password = prompt("الرجاء إدخال كلمة السر لفتح الصور:");
    
    // كلمة السر هي 123
    if (password === "123") {
        // البحث عن كل العناصر التي تحمل كلاس locked
        const lockedElements = document.querySelectorAll('.locked');
        
        lockedElements.forEach(element => {
            element.classList.remove('locked');
            element.classList.add('unlocked');
        });
        
        alert("تم فتح الصور بنجاح!");
    } else if (password !== null) { // إذا لم يضغط المستخدم على إلغاء
        alert("كلمة السر خاطئة!");
    }
}

// فتح نافذة كلمة السر
function unlockGallery() {
    document.getElementById('passwordModal').style.display = 'flex';
    document.getElementById('passInput').focus();
}

// إغلاق النافذة
function closeModal() {
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('passInput').value = '';
}

// التحقق من كلمة السر
function checkPassword() {
    const pass = document.getElementById('passInput').value;
    const correctPass = "9/8/2006"; // كلمة السر الخاصة بك

    if (pass === correctPass) {
        document.querySelectorAll('.locked').forEach(el => {
            el.classList.remove('locked');
            el.classList.add('unlocked');
        });
        closeModal();
        alert("تم فك التشفير بنجاح!");
    } else {
        alert("كلمة السر خاطئة، حاول مرة أخرى.");
        document.getElementById('passInput').value = '';
    }
}

// دالة إغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById('passwordModal');
    modal.style.display = 'none'; // إخفاء النافذة
    document.getElementById('passInput').value = ''; // تفريغ الخانة
}

// إضافة إغلاق النافذة عند الضغط خارج المربع الأسود (لمسة احترافية)
window.onclick = function(event) {
    const modal = document.getElementById('passwordModal');
    if (event.target == modal) {
        closeModal();
    }
}






