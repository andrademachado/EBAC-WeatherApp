// reference: https://raw.githubusercontent.com/oliveira-victor/servidor_estaticos/main/day/113.png"

export const weatherIcon = (isDay: number | undefined, iconCode: number | undefined) => {
    const baseURL = "https://raw.githubusercontent.com/oliveira-victor/servidor_estaticos/main/";

    let dayStatus = "";

    const weatherData = [
        { code: 1000, icon: 113 },
        { code: 1003, icon: 116 },
        { code: 1006, icon: 119 },
        { code: 1009, icon: 122 },
        { code: 1030, icon: 143 },
        { code: 1063, icon: 176 },
        { code: 1066, icon: 179 },
        { code: 1069, icon: 182 },
        { code: 1072, icon: 185 },
        { code: 1087, icon: 200 },
        { code: 1114, icon: 227 },
        { code: 1117, icon: 230 },
        { code: 1135, icon: 248 },
        { code: 1147, icon: 260 },
        { code: 1150, icon: 263 },
        { code: 1153, icon: 266 },
        { code: 1168, icon: 281 },
        { code: 1171, icon: 284 },
        { code: 1180, icon: 293 },
        { code: 1183, icon: 296 },
        { code: 1186, icon: 299 },
        { code: 1189, icon: 302 },
        { code: 1192, icon: 305 },
        { code: 1195, icon: 308 },
        { code: 1198, icon: 311 },
        { code: 1201, icon: 314 },
        { code: 1204, icon: 317 },
        { code: 1207, icon: 320 },
        { code: 1210, icon: 323 },
        { code: 1213, icon: 326 },
        { code: 1216, icon: 329 },
        { code: 1219, icon: 332 },
        { code: 1222, icon: 335 },
        { code: 1225, icon: 338 },
        { code: 1237, icon: 350 },
        { code: 1240, icon: 353 },
        { code: 1243, icon: 356 },
        { code: 1246, icon: 359 },
        { code: 1249, icon: 362 },
        { code: 1252, icon: 365 },
        { code: 1255, icon: 368 },
        { code: 1258, icon: 371 },
        { code: 1261, icon: 374 },
        { code: 1264, icon: 377 },
        { code: 1273, icon: 386 },
        { code: 1276, icon: 389 },
        { code: 1279, icon: 392 },
        { code: 1282, icon: 395 },
    ];

    isDay ? dayStatus = "day/" : dayStatus = "night/"

    for (const entry of weatherData) {
        if (entry.code === iconCode) {
            return baseURL + dayStatus + entry.icon + ".png"
        }
    }
}
