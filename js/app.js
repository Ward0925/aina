$(function () {
    appstar();
});
var title = [
    { 編號: '01', picX: 0.5, picY: 0.5, text: '造物者', startDate: '', endDate: '' },
    { 編號: '02', picX: 0.583, picY: 0.518, text: '大地母親', startDate: '', endDate: '' }, // 0.604
    { 編號: '03', picX: 0.537, picY: 0.576, text: '太陽父親', startDate: '', endDate: '' },
    { 編號: '04', picX: 0.463, picY: 0.576, text: '月亮祖母', startDate: '', endDate: '' },
    { 編號: '05', picX: 0.417, picY: 0.518, text: '海龜家族', startDate: '', endDate: '', 屬性: '土' },
    { 編號: '06', picX: 0.434, picY: 0.447, text: '青蛙家族', startDate: '', endDate: '', 屬性: '水' },
    { 編號: '07', picX: 0.5, picY: 0.415, text: '雷鳥家族', startDate: '', endDate: '', 屬性: '火' },
    { 編號: '08', picX: 0.566, picY: 0.447, text: '蝴蝶家族', startDate: '', endDate: '', 屬性: '風' },
    { 編號: '09', picX: 0.5, picY: 0.135, text: '北', startDate: '', endDate: '' },
    { 編號: 10, picX: 0.865, picY: 0.5, text: '東', startDate: '', endDate: '' },
    { 編號: 11, picX: 0.5, picY: 0.865, text: '南', startDate: '', endDate: '' },
    { 編號: 12, picX: 0.135, picY: 0.5, text: '西', startDate: '', endDate: '' },
    { 編號: 13, picX: 0.64, picY: 0.163, text: '大地復原', startDate: '2023-12-22', endDate: '2024-01-19', 屬性: '土', 家族: '海龜家族', 方位: '北' },
    { 編號: 14, picX: 0.758, picY: 0.242, text: '休眠淨化', startDate: '2024-01-20', endDate: '2024-02-18', 家族: '蝴蝶家族', 方位: '北' },
    { 編號: 15, picX: 0.837, picY: 0.36, text: '強風', startDate: '2024-02-19', endDate: '2024-03-20', 屬性: '水', 家族: '青蛙家族', 方位: '北' },
    { 編號: 16, picX: 0.837, picY: 0.64, text: '樹萌芽', startDate: '2024-03-21', endDate: '2024-04-19', 屬性: '火', 家族: '雷鳥家族', 方位: '東' },
    { 編號: 17, picX: 0.758, picY: 0.758, text: '蛙回歸', startDate: '2024-04-20', endDate: '2024-05-20', 屬性: '土', 家族: '海龜家族', 方位: '東' },
    { 編號: 18, picX: 0.64, picY: 0.837, text: '玉米種植', startDate: '2024-05-21', endDate: '2024-06-20', 屬性: '風', 家族: '蝴蝶家族', 方位: '東' },
    { 編號: 19, picX: 0.36, picY: 0.837, text: '烈日', startDate: '2024-06-21', endDate: '2024-07-22', 屬性: '水', 家族: '青蛙家族', 方位: '南' },
    { 編號: 20, picX: 0.242, picY: 0.758, text: '採莓', startDate: '2024-07-23', endDate: '2024-08-22', 家族: '雷鳥家族', 方位: '南' },
    { 編號: 21, picX: 0.163, picY: 0.64, text: '收穫', startDate: '2024-08-23', endDate: '2024-09-22', 屬性: '土', 家族: '海龜家族', 方位: '南' },
    { 編號: 22, picX: 0.163, picY: 0.36, text: '群鴨飛遷', startDate: '2024-09-23', endDate: '2024-10-23', 屬性: '風', 家族: '蝴蝶家族', 方位: '西' },
    { 編號: 23, picX: 0.242, picY: 0.242, text: '結凍', startDate: '2024-10-24', endDate: '2024-11-21', 屬性: '水', 家族: '青蛙家族', 方位: '西' },
    { 編號: 24, picX: 0.36, picY: 0.163, text: '長雪', startDate: '2024-11-22', endDate: '2024-12-21', 屬性: '火', 家族: '雷鳥家族', 方位: '西' },
    { 編號: 25, picX: 0.5, picY: 0.205, text: '淨化', startDate: '', endDate: '' },
    { 編號: 26, picX: 0.5, picY: 0.274, text: '重建', startDate: '', endDate: '' },
    { 編號: 27, picX: 0.5, picY: 0.3435, text: '純潔', startDate: '', endDate: '' },
    { 編號: 28, picX: 0.795, picY: 0.5, text: '清晰', startDate: '', endDate: '' },
    { 編號: 29, picX: 0.7257, picY: 0.5, text: '智慧', startDate: '', endDate: '' },
    { 編號: 30, picX: 0.6565, picY: 0.5, text: '光明', startDate: '', endDate: '' },
    { 編號: 31, picX: 0.5, picY: 0.795, text: '成長', startDate: '', endDate: '' },
    { 編號: 32, picX: 0.5, picY: 0.7257, text: '信任', startDate: '', endDate: '' },
    { 編號: 33, picX: 0.5, picY: 0.6565, text: '愛', startDate: '', endDate: '' },
    { 編號: 34, picX: 0.205, picY: 0.5, text: '體驗', startDate: '', endDate: '' },
    { 編號: 35, picX: 0.274, picY: 0.5, text: '內省', startDate: '', endDate: '' },
    { 編號: 36, picX: 0.3435, picY: 0.5, text: '力量', startDate: '', endDate: '' }, // 0.3265
];
var sideSet = [
    { 方位: '北', id: 'north', },
    { 方位: '東', id: 'east', },
    { 方位: '南', id: 'south', },
    { 方位: '西', id: 'west', },
    { 方位: '天', id: 'sky', },
    { 方位: '地', id: 'land', },
];
var colorSelect = [
    { 配色: '紅', 顏色: ['#F7C1C1', '#E88B8B', '#E06363'] },
    { 配色: '橙', 顏色: ['#F4D5C1', '#E8BA8B', '#E08D63'] },
    { 配色: '黃', 顏色: ['#F4F4C1', '#E8E88B', '#E0D663'] },
    { 配色: '綠', 顏色: ['#EFEBCE', '#D6CE93', '#A3A380'] },
    { 配色: '藍', 顏色: ['#BDDFE9', '#ACBDD7', '#7E9DC9'] },
    { 配色: '紫', 顏色: ['#CAABD8', '#9873B9', '#714288'] },
    { 配色: '灰', 顏色: ['#D3D3D3', '#A3A3A3', '#3A3A3A'] },
    { 配色: '粉', 顏色: ['#F9C0D2', '#EA8AA5', '#E26170'] },
    { 配色: '深綠', 顏色: ['#CCE3DE', '#A4C3B2', '#6B9080'] },
    { 配色: '紅紫', 顏色: ['#E8C2CA', '#B392AC', '#735D78'] },
    { 配色: '米', 顏色: ['#EEE0D3', '#E8CAA4', '#ECCFB1'] },
];
var side_title = ['本命方位', '本命家族', '本命月份'];
var allcircle = [];
function appstar() {// <div class="center" id="myCanvasPie" style="background-image: url('photo/pic.png'); background-size: cover; background-position: center;">
    const illustrate = `
        <span style="white-space: pre-line;">想說的話寫在這裡
        嘿唷嘿唷拔蘿蔔
        </span>
    `;
    const html = `
        <div class="row">
            <div class="col-12 col-xl-12">
                <div class="card radius-10">
                    <div class="card-body">
                    ${illustrate}
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-xl-2">
            <div class="col-12 col-xl-6">
                <div class="card radius-10">
                    <div class="card-body">
                        <div class="center" id="myCanvasPie">
                            <canvas id="myCanvas"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-6" id="canvas-change">
                <div class="col-12 col-xl-12">
                    <div class="card radius-10">
                        <div class="card-body">
                            <input autocomplete="off" class="input_text" id="timedates" type="text">
                            <input hidden="" id="selected_date">
                            <select id="chooseColor"></select>
                            <select id="background_img">
                                <option value="pic-white">白色</option>
                                <option value="pic-0">透明</option>
                                <option value="pic-1">紅花</option>
                                <option value="pic-2">灰色</option>
                                <option value="pic-spring">春天</option>
                                <option value="pic-whale">鯨魚</option>
                                <option value="pic-stingray">魟魚</option>
                                <option value="pic-circle">迴圈</option>
                            </select>
                            <button type="button" class="btn btn-warning px-5 radius-30 pictureDownload">另存圖片</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-12">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div class="card-header bg-transparent">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <h6 class="mb-0" style="font-weight: bold; font-size: 1.2rem;">守護靈</h6>
                                    </div>
                                </div>
						    </div>
                            <div id="chooseSelect" style="display: flex; flex-direction: column;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    $(`#bodylist`).html(html);
    timedates();
    // 配色選單
    let buttonColor = "";
    for (const c of colorSelect) {
        buttonColor += `
            <option value="${c.配色}">${c.配色}</option>
        `;
    }
    $(`#chooseColor`).html(buttonColor);
    // 方位設定
    let chooseHTML = ``;
    let countSelect = 0;
    for (const s of sideSet) {
        const { 方位, id } = s;
        let num = `
            <select id="num-${id}">
                <option>位置數量</option>
        `;
        for (let i = 1; i <= 12; i++) {
            num += `<option>${i}</option>`;
        }
        num += `</select>`;
        chooseHTML += `
            ${countSelect === 0 ? '' : '<hr>'}
            <div style="display: flex; align-items: center; flex-wrap: wrap;">
                <span style="text-align: right; margin-right: 10px;">${方位}</span>
                <input required="" class="input_text" id="input_text_${id}" type="text">
                ${num}
                <div id="select-${id}"></div>
            </div>
        `;
        countSelect += 1;
    }
    $(`#chooseSelect`).html(chooseHTML);
    // 選單數量
    function selectNum(row) {
        const { number, id } = row;
        const option = `${title.filter(key => key.編號 !== '01')
            .map(key => `
                    <option value="${key.text}">${key.編號}-${key.text}</option>
                `
            )
            .join('')
            }`;
        let selectSet = "";
        for (let i = 1; i <= number; i++) {
            selectSet += `
                    <select class="select-set" data-side="${id}">
                        <option></option>
                            ${option}
                    </select>
                `;
        }
        $(`#select-${id}`).html(selectSet);
    }
    // 監聽數量變化
    for (const s of sideSet) {
        const { 方位, id } = s;
        $(document).on(`change`, `#num-${id}`, function () {
            const number = $(`#num-${id}`).val();
            selectNum({ number: number, id: id });
        });
    }
    $(document).off(`change`, `#canvas-change`).on(`change`, `#canvas-change`, function () {
        const timeget = $(`#selected_date`).val();
        // 初次執行為當日
        const time = timeget ? timeget : moment().format('YYYY-MM-DD')
        // 獲取本命月份、方位、家族
        const result = lightcircle({ time: time });
        // 獲取根據方位的定位項目
        $('.select-set').each(function () {
            const selectValue = $(this).val();
            const side = $(this).data('side');
            if (selectValue) {
                const resultfilter = title.filter(key => {
                    return key.text === selectValue
                });
                const newData = {
                    編號: parseFloat(resultfilter[0].編號),
                    picX: parseFloat(resultfilter[0].picX),
                    picY: parseFloat(resultfilter[0].picY),
                    side: side,
                    text: selectValue,
                    type: `守護靈`,
                }
                // 將選取的項目推入陣列
                result.push(newData);
            }
        });
        myCanvasSet(result);
    });
    $(document).on(`click`, `.pictureDownload`, function () {
        // 獲取 canvas 元素的引用
        const canvas = document.getElementById('myCanvas');
        // 將 canvas 轉換為 Data URL
        const dataURL = canvas.toDataURL();
        // 創建一個新的圖像元素
        const img = new Image();
        // 賦值 Data URL 給圖像元素的 src 屬性
        img.src = dataURL;
        // 創建一個 a 元素，用於下載圖片
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'canvas_image.png';
        a.click();
    });
}
// 根據日期選擇項目
function lightcircle(row) {
    function numjudege(project) {
        for (const t of title) {
            const { 編號, picX, picY, text } = t;
            if (text === project) {
                return { 編號: parseFloat(編號), picX: picX, picY: picY };
            }
        }
    }
    const { time } = row;
    const result = [];
    for (const t of title) {
        const { 編號, picX, picY, text, startDate, endDate, 屬性, 家族, 方位 } = t;
        let timeSet = moment(time).format('2024-MM-DD');
        const timeGet = moment(time).format('2023-MM-DD');
        if (timeGet >= moment('2024-12-22').format('2023-MM-DD') && timeGet <= moment('2024-12-31').format('2023-MM-DD')) {
            timeSet = moment(time).format('2023-MM-DD');
        }
        let startSet = moment(startDate).format('YYYY-MM-DD');
        let endSet = moment(endDate).format('YYYY-MM-DD');
        if (startDate && (timeSet >= startSet && timeSet <= endSet)) {
            const 本命月份 = numjudege(text);
            const 本命方位 = numjudege(方位);
            const 本命家族 = numjudege(家族);
            result.push({ ...本命月份, side: `本命月份`, text: text, type: `生日` });
            result.push({ ...本命方位, side: `本命方位`, text: 方位, type: `生日` });
            result.push({ ...本命家族, side: `本命家族`, text: 家族, type: `生日` });
        }
    }
    return result;
}
function myCanvasSet(result) {
    $(`#myCanvas`).remove();
    $(`#myCanvasPie`).append(`<canvas id="myCanvas"></canvas>`);
    // 初次執行
    resizeCanvas();
    // 監聽窗口大小變化事件
    window.addEventListener('resize', resizeCanvas);
    function resizeCanvas() {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        const divWidth = document.getElementById('myCanvasPie').offsetWidth;
        const devicePixelRatio = window.devicePixelRatio
        // 畫布解析度
        const picSize = divWidth * 2 * devicePixelRatio;
        canvas.width = picSize;
        canvas.height = picSize;
        const background_img = $(`#background_img`).val();
        // 加載背景圖片
        const img = new Image();
        img.src = `photo/${background_img}.png`; // 更換為你的圖片路徑
        img.onload = function () {
            // 在圖片加載完成後，在 Canvas 上繪製圖片
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // 繪製內容
            const data = { canvas: canvas, ctx: ctx, picSize: picSize, devicePixelRatio: devicePixelRatio };
            draw(data, result);

            // 實際畫布大小
            $(`#myCanvas`).css({
                width: divWidth,
                height: divWidth,
            });
        };
    }
}

function draw(data, result) {
    const { canvas, ctx, picSize } = data
    // 抗鋸齒效果
    ctx.imageSmoothingEnabled = true;
    // 圖像渲染的平滑度
    ctx.imageSmoothingQuality = 'high';
    // 文本渲染的平滑度
    ctx.textSmoothingQuality = 'high';
    // 設置像素比例為2，增加清晰度
    ctx.pixelRatio = 10;

    // ctx.fillStyle = 'white';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 獲取配色
    const colorChoose = $(`#chooseColor`).val()
    const colorScheme = colorSelect.find(scheme => scheme.配色 === colorChoose);
    const colorGet = colorScheme ? colorScheme.顏色 : [];
    const 淺色 = colorGet[0];
    const 中色 = colorGet[1];
    const 深色 = colorGet[2];
    // XY位置
    function xySet(row) {
        const { picX, picY } = row;
        const sideX = picX * picSize;
        const sideY = picY * picSize;
        return { sideX: Math.round(sideX), sideY: Math.round(sideY) };
    }
    // 圓形半徑
    function circleRadiusSet(row) {
        const { 編號 } = row;
        if (編號 === 1) {
            return Math.round(picSize * 0.043) // 0.055 0.0475
        } else if (編號 > 8 && 編號 <= 12) {
            return Math.round(picSize * 0.035)
        } else {
            return Math.round(picSize * 0.029)
        }
    }
    // 實心圓
    function filled_circle(row) {
        const { sideX, sideY, radius, color } = row;
        let colorSet = color ? color : 'rgba(0, 0, 0, 0)';
        ctx.beginPath();
        ctx.arc(sideX, sideY, radius, 0, Math.PI * 2);
        ctx.fillStyle = colorSet;
        ctx.fill();
        ctx.closePath();

        const colorSetO = 深色;
        ctx.strokeStyle = colorSetO;
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();
    }
    // 空心圓
    function hollow_circle(row) {
        const { sideX, sideY, radius, color } = row;
        let colorSet = color ? color : 深色;
        ctx.beginPath();
        ctx.arc(sideX, sideY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = colorSet;
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();
    }
    // 標籤位置
    function drowTitleMark(row) {
        const { 編號, sideX, sideY, side, type, 層級 } = row;
        let backgroundColor = 淺色;
        let width_set = 0;
        let height_set = picSize * 0.012;
        let locationX_set = sideX + (picSize * 0.05);
        let locationY_set = sideY - (picSize * 0.04);
        let fontSideX_set = picSize * 0.02;
        let fontSideY_set = picSize * 0.017;
        let fontSize_set = picSize * 0.014;
        let textShow = side;
        if (side_title.includes(side)) {
            backgroundColor = 中色;
            const locationXY = {
                5: { X: sideX + (picSize * -0.075), Y: sideY + (picSize * 0.022) },
                6: { X: sideX + (picSize * -0.07), Y: sideY + (picSize * -0.05) },
                7: { X: sideX + (picSize * 0.05), Y: sideY + (picSize * -0.03) },
                8: { X: sideX + (picSize * 0.05), Y: sideY + (picSize * -0.03) },
                9: { X: sideX + (picSize * 0.055), Y: sideY + (picSize * -0.03) },
                10: { X: sideX + (picSize * 0.055), Y: sideY + (picSize * 0.01) },
                11: { X: sideX + (picSize * -0.1), Y: sideY + (picSize * 0.01) },
                12: { X: sideX + (picSize * -0.1), Y: sideY + (picSize * -0.03) },
                右上: { X: sideX + (picSize * 0.05), Y: sideY + (picSize * -0.03) },
                右下: { X: sideX + (picSize * 0.05), Y: sideY + (picSize * 0.01) },
                左上: { X: sideX + (picSize * -0.09), Y: sideY + (picSize * -0.03) },
                左下: { X: sideX + (picSize * -0.09), Y: sideY + (picSize * 0.01) },
            }
            width_set = picSize * 0.04;
            if ((編號 >= 5 && 編號 <= 12)) {
                locationX_set = locationXY[編號].X;
                locationY_set = locationXY[編號].Y;
            } else
                if (編號 >= 13 && 編號 <= 15) {
                    locationX_set = locationXY['右上'].X;
                    locationY_set = locationXY['右上'].Y;
                } else if (編號 >= 16 && 編號 <= 18) {
                    locationX_set = locationXY['右下'].X;
                    locationY_set = locationXY['右下'].Y;
                } else if (編號 >= 19 && 編號 <= 21) {
                    locationX_set = locationXY['左下'].X;
                    locationY_set = locationXY['左下'].Y;
                } else if (編號 >= 22 && 編號 <= 24) {
                    locationX_set = locationXY['左上'].X;
                    locationY_set = locationXY['左上'].Y;
                }
        } else {
            if (type === '守護靈') {
                const nameGet = sideSet.find(scheme => scheme.id === side);
                const name = nameGet.方位;
                // 獲取輸入框資料
                const animal = $(`#input_text_${side}`).val();
                // 判斷輸入內容是否全英文
                const isEnglish = /^[a-zA-Z\s-]+$/.test(animal);
                textShow = animal ? `${name}｜${animal}` : `${name}`;
                let font_move = 0;
                width_set = picSize * 0.04;
                let level = 層級 * 0.026;
                if (isEnglish) {
                    // 輸入內容全英文
                    if (textShow.length > 6) {
                        width_set = picSize * (0.04 + ((textShow.length - 4) * 0.007));
                        font_move = (textShow.length - 4) * 0.0035
                    }
                } else {
                    // 輸入內容不為全英文
                    if (textShow.length > 4) {
                        width_set = picSize * (0.04 + ((textShow.length - 4) * 0.015));
                        font_move = ((textShow.length - 4) * 0.0075)
                    }
                }
                fontSideX_set = picSize * (0.02 + font_move);
                // locationX_set = sideX - (picSize * (0.025 + font_move));
                const locationXY_get = {
                    2: { X: sideX + (picSize * (0.045)), Y: sideY + (picSize * (0.04 + level)) },
                    3: { X: sideX + (picSize * (0.045)), Y: sideY + (picSize * (0.04 + level)) },
                    4: { X: sideX + (picSize * (-0.055 + (-font_move * 2))), Y: sideY + (picSize * (0.055 + level)) },
                    5: { X: sideX + (picSize * (-0.075 + (-font_move * 2))), Y: sideY + (picSize * (0.048 + level)) },
                    6: { X: sideX + (picSize * (-0.07 + (-font_move * 2))), Y: sideY + (picSize * (-0.076 + -level)) },
                    7: { X: sideX + (picSize * (0.05)), Y: sideY + (picSize * (-0.056 + -level)) },
                    8: { X: sideX + (picSize * (0.05)), Y: sideY + (picSize * (-0.056 + -level)) },
                    9: { X: sideX + (picSize * (0.055)), Y: sideY + (picSize * (-0.056 + -level)) },
                    10: { X: sideX + (picSize * (0.055 + (-font_move * 2))), Y: sideY + (picSize * (0.036 + level)) },
                    11: { X: sideX + (picSize * (-0.1 + (-font_move * 2))), Y: sideY + (picSize * (0.036 + level)) },
                    12: { X: sideX + (picSize * (-0.1)), Y: sideY + (picSize * (-0.056 + -level)) },
                    25: { X: sideX + (picSize * (-0.09 + (-font_move * 2))), Y: sideY + (picSize * (-0.026 + -level)) },
                    26: { X: sideX + (picSize * (0.05)), Y: sideY + (picSize * (-0.026 + -level)) },
                    27: { X: sideX + (picSize * (-0.09 + (-font_move * 2))), Y: sideY + (picSize * (-0.056 + -level)) },
                    30: { X: sideX - (picSize * (-0.03)), Y: sideY + (picSize * (-0.083 + -level)) },
                    31: { X: sideX + (picSize * (0.05)), Y: sideY + (picSize * (0.001 + level)) },
                    32: { X: sideX + (picSize * (-0.09 + (-font_move * 2))), Y: sideY + (picSize * (0.001 + level)) },
                    36: { X: sideX - (picSize * (0.03 + (font_move * 2))), Y: sideY + (picSize * (-0.083 + -level)) },
                    右上: { X: sideX + (picSize * (0.05)), Y: sideY + (picSize * (-0.056 + -level)) },
                    右下: { X: sideX + (picSize * (0.05)), Y: sideY + (picSize * (0.036 + level)) },
                    左上: { X: sideX + (picSize * (-0.09 + (-font_move * 2))), Y: sideY + (picSize * (-0.056 + -level)) },
                    左下: { X: sideX + (picSize * (-0.09 + (-font_move * 2))), Y: sideY + (picSize * (0.036 + level)) },
                    上: { X: sideX - (picSize * (0.02 + font_move)), Y: sideY + (picSize * (-0.083 + -level)) },
                    下: { X: sideX - (picSize * (0.02 + font_move)), Y: sideY + (picSize * (0.06 + level)) },
                }
                if (編號 >= 2 && 編號 <= 12) {
                    locationX_set = locationXY_get[編號].X;
                    locationY_set = locationXY_get[編號].Y;
                } else if ((編號 >= 13 && 編號 <= 15)) {
                    locationX_set = locationXY_get['右上'].X;
                    locationY_set = locationXY_get['右上'].Y;
                } else if ((編號 >= 16 && 編號 <= 18) || 編號 === 33) {
                    locationX_set = locationXY_get['右下'].X;
                    locationY_set = locationXY_get['右下'].Y;
                } else if ((編號 >= 19 && 編號 <= 21)) {
                    locationX_set = locationXY_get['左下'].X;
                    locationY_set = locationXY_get['左下'].Y;
                } else if ((編號 >= 22 && 編號 <= 24)) {
                    locationX_set = locationXY_get['左上'].X;
                    locationY_set = locationXY_get['左上'].Y;
                } else if (編號 === 28 || 編號 === 34) {
                    locationX_set = locationXY_get['上'].X;
                    locationY_set = locationXY_get['上'].Y;
                } else if (編號 === 29 || 編號 === 35) {
                    locationX_set = locationXY_get['下'].X;
                    locationY_set = locationXY_get['下'].Y;
                } else {
                    locationX_set = locationXY_get[編號].X;
                    locationY_set = locationXY_get[編號].Y;
                }
            }
        }
        // 參數整理
        width = Math.floor(width_set);
        height = Math.floor(height_set);
        locationX = Math.floor(locationX_set);
        locationY = Math.floor(locationY_set);
        fontSideX = Math.floor(fontSideX_set);
        fontSideY = Math.floor(fontSideY_set);
        fontSize = Math.floor(fontSize_set);
        // 建立一個新的路徑
        ctx.beginPath();
        // 移動到左上角
        ctx.moveTo(locationX, locationY);
        // 繪製一條水平線
        ctx.lineTo(locationX + width, locationY);
        // 繪製右側弧線
        ctx.arc(locationX + width, locationY + height, height, -Math.PI / 2, Math.PI / 2);
        // 繪製一條水平線
        ctx.lineTo(locationX + width, locationY + (height * 2));
        // 繪製左側弧線
        ctx.arc(locationX, locationY + height, height, Math.PI / 2, -Math.PI / 2);
        // 關閉路徑
        ctx.closePath();
        // 標籤外框線
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();
        // 填充路徑
        ctx.fillStyle = backgroundColor; // 填充顏色
        ctx.fill(); // 填充內部
        ctx.font = `bold ${fontSize}px Arial`; // 字體大小及類型
        ctx.fillStyle = '#000'; // 文字顏色
        ctx.textAlign = 'center'; // 文字居中水平對齊
        // 字體樣式
        ctx.font = `bold ${fontSize}px Arial`; // 字體大小及類型
        // 繪製text
        ctx.fillText(textShow, locationX + fontSideX, locationY + fontSideY);
    }
    // 文字
    function writeText(row) {
        const { 編號, sideX, sideY, text, work } = row;
        // 判斷字體大小
        let fontSize = 0;

        fontSize = Math.floor(picSize * 0.016);
        // 計算編號位置
        let firstLineY = sideY - fontSize * 0.6;
        // 計算text位置
        let secondLineY = sideY + fontSize * 0.7;
        if (編號 > 8 && 編號 <= 12) {
            fontSize = Math.floor(picSize * 0.024);
            firstLineY = sideY - fontSize * 0.4;
            secondLineY = sideY + fontSize * 0.8;
        } else if (編號 === 1) {
            fontSize = Math.floor(picSize * 0.024);
            firstLineY = sideY - fontSize * 0.6;
            secondLineY = sideY + fontSize * 0.6;
        }
        ctx.font = `bold ${fontSize}px Arial`; // 字體大小及類型
        ctx.fillStyle = '#000'; // 文字顏色
        ctx.textAlign = 'center'; // 文字居中水平對齊
        // 繪製編號
        ctx.fillText(parseFloat(編號), sideX, firstLineY);
        // 繪製text
        ctx.fillText(text, sideX, secondLineY);
    }
    // 計算選取項目重複次數
    const chooseCount = [];
    const advance = [];
    const cache = {};
    const uniqueChoose = []; // 獲取有出現的項目
    let sideAndType = {};
    for (const r of result) {
        const { 編號, picX, picY, side, text, type } = r;
        const key = `${編號}`
        if (!cache.hasOwnProperty(key)) {
            advance.push(key);
            cache[key] = new Set();
            chooseCount.push({ 編號: parseFloat(編號), picX, picY, text, list: [], 次數: 0 });
            uniqueChoose.push(parseFloat(編號));
        }
        const index = advance.indexOf(key);
        // 守護靈取不重複值
        if (!sideAndType[`${text}${side}${type}`]) {
            chooseCount[index].次數 += 1;
            chooseCount[index].list.push({ side: side, type: type });
            sideAndType[`${text}${side}${type}`] = `${text}${side}${type}`;
        }

    }
    const unique = title.filter(item => {
        return !uniqueChoose.includes(parseFloat(item.編號));
    });
    for (const r of unique) {
        const { 編號, picX, picY, text, list, 次數 } = r;
        const xy = xySet({ picX: picX, picY: picY });
        const radius = circleRadiusSet({ 編號: parseFloat(編號) })
        hollow_circle({ sideX: xy.sideX, sideY: xy.sideY, radius: Math.round(radius), color: '#b9b9b9' });
        writeText({ 編號: parseFloat(編號), sideX: xy.sideX, sideY: xy.sideY, text: text });
    }
    // 緩存出現過的實心圓及基礎文字
    let filled_circle_writeText_count = {};
    // 緩存出現過的標籤
    let title_count = {};
    for (const r of chooseCount) {
        const { 編號, picX, picY, text, list, 次數 } = r;
        const xy = xySet({ picX: picX, picY: picY });
        const radius = circleRadiusSet({ 編號: 編號 })
        for (const l of list) {
            // 根據出現次出繪製疊加空心圓
            for (let i = 0; i < 次數; i++) {
                const num = i === 0 ? 1 : (0.13 * i) + 1;
                hollow_circle({ sideX: xy.sideX, sideY: xy.sideY, radius: Math.round(radius * num), color: 深色 });
            }
        }
        for (const l of list) {
            const { side, type } = l;
            let backgroundColor = 淺色;
            if (side_title.includes(side)) {
                backgroundColor = 中色;
            }
            // 如果編號不存在緩存內，則繪製實心圓並將數據加入緩存
            if (!filled_circle_writeText_count[編號]) {
                filled_circle({ sideX: xy.sideX, sideY: xy.sideY, radius: radius, color: backgroundColor });
                writeText({ 編號: parseFloat(編號), sideX: xy.sideX, sideY: xy.sideY, text: text });
                filled_circle_writeText_count[編號] = parseFloat(編號);
            }
        }
        let count = -1;
        for (let i = 0; i < list.length; i++) {
            const { side, type } = list[i];
            // 如果編號不存在緩存內，則繪製標籤並將數據加入緩存
            if (!title_count[`${編號}${side}`]) {
                // 繪製標籤
                drowTitleMark({ 編號: parseFloat(編號), sideX: xy.sideX, sideY: xy.sideY, side: side, type: type, 層級: count });
                title_count[`${編號}${side}`] = `${編號}${side}`;
                count += 1
            }
        }
    }
    // /* 測試使用 */
    // for (const r of title) {
    //     const { 編號, picX, picY } = r;
    //     const num = parseFloat(編號)
    //     const xy = xySet({ picX: picX, picY: picY });
    //     const radius = circleRadiusSet({ 編號: num })
    //     hollow_circle({ sideX: xy.sideX, sideY: xy.sideY, radius: radius, color: 深色 });
    // }
    // /* 測試使用 */
}
