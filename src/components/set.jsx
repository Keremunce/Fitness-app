import React, { useState } from "react";

function Set() {
    const [repCount, setRepCount] = useState(10); // Varsayılan başlangıç değeri
    const [restTimeCount, setRestTimeCount] = useState(30); // Varsayılan başlangıç değeri

    const handleRepCountChange = (e) => {
        const newValue = e.target.value;
        // Sayı olmayan karakterleri kaldırır
        const sanitizedValue = newValue.replace(/\D/g, "");
        setRepCount(sanitizedValue);
    };

    const handleRestTimeCountChange = (e) => {
        const newValue = e.target.value;
        // Sayı olmayan karakterleri kaldırır
        const sanitizedValue = newValue.replace(/\D/g, "");
        setRestTimeCount(sanitizedValue);
    };

    return (
        <div className="SetCard">
            <div className="setIndex">
                <p>1.SET</p>
            </div>
            <div className="setCard-inner">
                <div className="inner-row">
                    <div className="repText">
                        <p>Repeat</p>
                    </div>
                    <div className="repCount">
                        <input
                            type="text"
                            value={repCount}
                            onChange={handleRepCountChange}
                            maxLength={2} // Maksimum 2 karaktere izin verir
                            style={{ maxWidth: "30px" }} // Maksimum genişlik ayarı
                        />
                        <p>x</p>
                    </div>
                </div>
                <div className="inner-row">
                    <div className="restTime">
                        <p>Rest Time</p>
                    </div>
                    <div className="restTimeCount">
                        <input
                            type="text"
                            value={restTimeCount}
                            onChange={handleRestTimeCountChange}
                            maxLength={2} // Maksimum 2 karaktere izin verir
                            style={{ maxWidth: "30px" }} // Maksimum genişlik ayarı
                        />
                        <p>sn</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Set;
