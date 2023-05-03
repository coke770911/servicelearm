const cos_data = [
    { "no": "1", "dept": "設計系", "tch": "閆嬰紅", "cos_name": "商品開發", "name": "中華民國聽障人協會", "position": "25.082109949806792, 121.52223949755407", "cos_type": "專業應用", "hours": "4", "pople_num": "50" },
    { "no": "2", "dept": "行銷系", "tch": "卓復政", "cos_name": "人力資源管理", "name": "深澳岬角淨灘創世文教基金會", "position": "25.13579925401784, 121.82436642434968", "cos_type": "環境保育", "hours": "3", "pople_num": "54" },
    { "no": "3", "dept": "行銷系", "tch": "林致祥", "cos_name": "創業管理與職場倫理", "name": "亞東紀念醫院亞東捷運站", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "40" },
    { "no": "4", "dept": "材纖系", "tch": "潘毅鈞", "cos_name": "纖維理化", "name": "人安基金會", "position": "25.058066677448537, 121.49658243794362", "cos_type": "社區服務", "hours": "2", "pople_num": "50" },
    { "no": "5", "dept": "通識教育中心", "tch": "黃寬裕", "cos_name": "當代倫理議題", "name": "迦南護理之家", "position": "25.006109438615415, 121.45600621270586", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "6", "dept": "通識教育中心", "tch": "楊淑芬", "cos_name": "領導知能與實務", "name": "江翠國中特教班、資源班", "position": "25.028914504132064, 121.46772828572156", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "7", "dept": "通識教育中心", "tch": "吳憶蘭", "cos_name": "關懷與學習", "name": "迦樂老人養護中心", "position": "24.99052292048026, 121.4713367261978", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "35" },
    { "no": "8", "dept": "資管系", "tch": "葉乙璇", "cos_name": "網頁製作", "name": "台北家扶中心", "position": "24.992796413950575, 121.45320387588482", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "9", "dept": "醫管系", "tch": "黃芬芬", "cos_name": "人際關係與溝通", "name": "亞東紀念醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "110" },
    { "no": "10", "dept": "護理系", "tch": "李靜芳", "cos_name": "健康促進", "name": "亞東紀念醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "100" },
    { "no": "11", "dept": "體育室", "tch": "黃振華", "cos_name": "體育（桌球）", "name": "中華民國殘障體育運動總會", "position": "25.050040277393986, 121.53954412805018", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "12", "dept": "行銷系", "tch": "林致祥", "cos_name": "經濟學", "name": "1.亞東紀念醫院2.亞東醫院捷運站", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "3", "pople_num": "40" },
    { "no": "13", "dept": "通識教育中心", "tch": "楊淑芬", "cos_name": "領導知能與實務", "name": "江翠國中特教班、資源班", "position": "25.028914504132064, 121.46772828572156", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "14", "dept": "電機系", "tch": "王信雄", "cos_name": "機器人整合控制", "name": "新北高工", "position": "24.982536134198824, 121.45125988201822", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "15", "dept": "護理系", "tch": "王冠今", "cos_name": "專業與倫理", "name": "台北市恆安老人長期照顧中心", "position": "25.023665351341993, 121.51091602440603", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "16", "dept": "通識教育中心", "tch": "廖德智", "cos_name": "憲政與人權", "name": "宏國老人安養中心", "position": "24.997337999735663, 121.45631613590034", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "30" },
    { "no": "17", "dept": "通識教育中心", "tch": "歐任淳", "cos_name": "環境生態與倫理", "name": "基隆市八斗子產業觀光促進會", "position": "25.141220970341973, 121.79625650900618", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "18", "dept": "體育室", "tch": "鄭元龍", "cos_name": "體育（羽球）", "name": "中華民國殘障體育運動總會", "position": "25.0500791560428, 121.53946902619894", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "19", "dept": "護理系", "tch": "韓文蕙", "cos_name": "輔助與另類療法", "name": "完全優診所", "position": "25.05269995637921, 121.54734781270679", "cos_type": "醫療照護", "hours": "2", "pople_num": "50" },
    { "no": "20", "dept": "護理系", "tch": "韓文蕙", "cos_name": "老人護理學", "name": "中華安全行動照護協會", "position": "25.079456361333254, 121.56705378387143", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "21", "dept": "設計系", "tch": "閆嬰紅", "cos_name": "創意思考", "name": "板橋市清潔隊", "position": "24.994844873261787, 121.44952194702677", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "22", "dept": "設計系", "tch": "閆嬰紅", "cos_name": "商品開發", "name": "新北市三峽區民義國民小學", "position": "24.91204084276834, 121.375564455032", "cos_type": "專業應用", "hours": "4", "pople_num": "52" },
    { "no": "23", "dept": "工管系", "tch": "柯亞先", "cos_name": "行銷傳播與文化創意", "name": "板橋南雅觀光夜市自治管理委員會", "position": "25.005430124092644, 121.45564418059729", "cos_type": "社區服務", "hours": "3", "pople_num": "40" },
    { "no": "24", "dept": "行銷系", "tch": "林致祥", "cos_name": "數位行銷與銀髮族智慧生活", "name": "亞東醫院亞東醫院捷運站", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "3", "pople_num": "40" },
    { "no": "25", "dept": "通識教育中心", "tch": "許佩玲", "cos_name": "學習與問題解決", "name": "恆安長期照護萬華院區", "position": "25.023665351341993, 121.51091602440603", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "54" },
    { "no": "26", "dept": "通識教育中心", "tch": "郭富良", "cos_name": "全球環境變遷與永續發展", "name": "淡水石門海濱", "position": "25.251506828222887, 121.46992626419919", "cos_type": "環境保育", "hours": "2", "pople_num": "44" },
    { "no": "27", "dept": "通識教育中心", "tch": "楊淑芬", "cos_name": "領導知能與實務", "name": "江翠國中特教班、資源班", "position": "25.028914504132064, 121.46772828572156", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "28", "dept": "通識教育中心", "tch": "歐任淳", "cos_name": "環境生態與倫理", "name": "基隆市八斗子產業觀光促進會", "position": "25.141220970341973, 121.79625650900618", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "29", "dept": "資管系", "tch": "葉乙璇", "cos_name": "計算機概論", "name": "台中市立梨山國民中小學", "position": "24.25591925488478, 121.25948347036187", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "30", "dept": "電機系", "tch": "陳保川", "cos_name": "電子實習（二）", "name": "新北市三峽區民義國民小學", "position": "24.91204084276834, 121.375564455032", "cos_type": "專業應用", "hours": "1", "pople_num": "56" },
    { "no": "31", "dept": "醫管系", "tch": "黃芬芬", "cos_name": "人際關係與溝通", "name": "亞東醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "90" },
    { "no": "32", "dept": "體育室", "tch": "鄧碧珍", "cos_name": "體育（籃球）", "name": "中華民國身心障礙體育協會", "position": "25.049988962764232, 121.5394731140335", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "33", "dept": "設計系", "tch": "閆嬰紅", "cos_name": "商品開發", "name": "新北市三峽區民義國小", "position": "24.91204084276834, 121.375564455032", "cos_type": "專業應用", "hours": "4", "pople_num": "48" },
    { "no": "34", "dept": "行銷系", "tch": "林致祥", "cos_name": "流通服務產業知識鏈實務講座", "name": "1.亞東紀念醫院2.亞東醫院捷運站", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "3", "pople_num": "40" },
    { "no": "35", "dept": "行銷系", "tch": "黃斐慧", "cos_name": "服務作業與品質管理", "name": "1.八里療養院2.愛心教養院", "position": "25.145073728928704, 121.41315650495099", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "50" },
    { "no": "36", "dept": "材纖系", "tch": "賴文魁", "cos_name": "服飾構成與製作實習", "name": "新北市家扶發展學園", "position": "24.992796413950575, 121.45320387588482", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "50" },
    { "no": "37", "dept": "通訊工程系", "tch": "陳俊宏", "cos_name": "網路程式設計", "name": "新北市新店安康公共托育中心", "position": "24.962777516870784, 121.51300865873559", "cos_type": "專業應用", "hours": "3", "pople_num": "25" },
    { "no": "38", "dept": "通識教育中心", "tch": "郭富良", "cos_name": "全球環境變遷與永續發展", "name": "三峽滿月圓森林遊樂區", "position": "24.830546459633794, 121.4446774711095", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "39", "dept": "通識教育中心", "tch": "楊淑芬", "cos_name": "領導知能與實務", "name": "江翠國中特教班、資源班", "position": "25.028914504132064, 121.46772828572156", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "40", "dept": "通識教育中心", "tch": "歐任淳", "cos_name": "環境生態與倫理", "name": "基隆市八斗子產業觀光促進會", "position": "25.141220970341973, 121.79625650900618", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "41", "dept": "電機系", "tch": "王信雄", "cos_name": "機器人整合控制", "name": "新北高工電機科", "position": "24.9825555842154, 121.45122769551054", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "42", "dept": "醫管系", "tch": "楊雪華", "cos_name": "健康促進理論與實務", "name": "照護中心", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "48" },
    { "no": "43", "dept": "醫管系", "tch": "楊雪華", "cos_name": "健康促進理論與實務", "name": "醫院", "position": "25.050098595362588, 121.53954412805018", "cos_type": "醫療照護", "hours": "2", "pople_num": "48" },
    { "no": "44", "dept": "護理系", "tch": "張玉梅", "cos_name": "成人護理學及實作", "name": "亞東紀念醫院", "position": "24.853974022416008, 121.4371418550309", "cos_type": "醫療照護", "hours": "3", "pople_num": "90" },
    { "no": "45", "dept": "體育室", "tch": "黃振華", "cos_name": "體育（桌球）", "name": "中華民國殘障體育運動總會", "position": "24.997247270188783, 121.45286298201856", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "46", "dept": "設計系", "tch": "閆嬰紅", "cos_name": "商品開發", "name": "新北市三峽區有木國小", "position": "24.998534999052126, 121.45257719041363", "cos_type": "專業應用", "hours": "4", "pople_num": "48" },
    { "no": "47", "dept": "行銷系", "tch": "林致祥", "cos_name": "投資理財與生涯規劃", "name": "亞東紀念醫院亞東醫院捷運站", "position": "25.145073728928704, 121.41315650495099", "cos_type": "醫療照護", "hours": "3", "pople_num": "40" },
    { "no": "48", "dept": "行銷系", "tch": "黃斐慧", "cos_name": "創新商品發展管理", "name": "衛生福利部八里療養院新北市八里愛心教養院", "position": "25.143006702635866, 121.41260254268452", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "45" },
    { "no": "49", "dept": "行銷系", "tch": "黃斐慧", "cos_name": "創新商品發展管理", "name": "衛生福利部八里療養院新北市八里愛心教養院", "position": "25.143006702635866, 121.41260254268452", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "45" },
    { "no": "50", "dept": "材纖系", "tch": "賴文魁", "cos_name": "服飾構成與製作實習（一）", "name": "新北市家扶發展學園", "position": "24.992980613007056, 121.45332827407968", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "45" },
    { "no": "51", "dept": "通識教育中心", "tch": "吳憶蘭", "cos_name": "關懷與學習", "name": "天使心家族社會福利基金會", "position": "25.06024216120902, 121.54620062805053", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "30" },
    { "no": "52", "dept": "通識教育中心", "tch": "郭富良", "cos_name": "全球環境變遷與永續發展", "name": "三峽滿月圓森林公園", "position": "24.830546459633794, 121.4446774711095", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "53", "dept": "醫管系", "tch": "黃芬芬", "cos_name": "人際關係與溝通", "name": "亞東紀念醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "90" },
    { "no": "54", "dept": "體育室", "tch": "鄧碧珍", "cos_name": "體育（籃球）", "name": "亞東技術學院體育室鄰近社區身心障礙人員", "position": "25.00082771696235, 121.45319849292298", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "55", "dept": "設計系", "tch": "閆嬰紅", "cos_name": "商品開發", "name": "新北市三峽區民義國小", "position": "24.912099226215457, 121.37541425132959", "cos_type": "專業應用", "hours": "4", "pople_num": "80" },
    { "no": "56", "dept": "行銷與流通管理系", "tch": "陳順興", "cos_name": "非營利行銷", "name": "信義國小", "position": "24.99174934921357, 121.45264365136279", "cos_type": "社區服務", "hours": "3", "pople_num": "30" },
    { "no": "57", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "服飾構成與製作實習（二）", "name": "新北市家扶發展學園", "position": "24.992854198564405, 121.45315661270547", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "45" },
    { "no": "58", "dept": "通識教育中心", "tch": "郭富良", "cos_name": "全球環境變遷與永續發展", "name": "石門海灘", "position": "25.28456999576387, 121.51716251217788", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "59", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "台北市大安區民輝里里長辦公室", "position": "25.040417699196894, 121.53369510734066", "cos_type": "專業應用", "hours": "2", "pople_num": "50" },
    { "no": "60", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "數位繪圖設計", "name": "臺北區中山社區大學", "position": "25.065918604866496, 121.52866488387113", "cos_type": "專業應用", "hours": "3", "pople_num": "80" },
    { "no": "61", "dept": "電子工程系", "tch": "董慧香", "cos_name": "單晶片丙級能力認證", "name": "高職學校約3所（待確定）", "position": "24.982516684179163, 121.45138862804887", "cos_type": "專業應用", "hours": "3", "pople_num": "30" },
    { "no": "62", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務（A）", "name": "亞東紀念醫院衛生局", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "50" },
    { "no": "63", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務（B）", "name": "亞東紀念醫院衛生局", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "50" },
    { "no": "64", "dept": "體育室", "tch": "鄧碧珍", "cos_name": "體育（籃球）", "name": "亞東技術學院體育室鄰近社區身心障礙人員", "position": "25.00082771696235, 121.45319849292298", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "65", "dept": "行銷與流通管理系", "tch": "林致祥", "cos_name": "創業管理與職場倫理", "name": "亞東紀念醫院亞東醫院捷運站", "position": "24.998534999052126, 121.45257719041363", "cos_type": "醫療照護", "hours": "2", "pople_num": "40" },
    { "no": "66", "dept": "電機系", "tch": "王信雄", "cos_name": "機器人整合控制", "name": "新北高工電機科", "position": "24.98259448423935, 121.45130279736176", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "67", "dept": "通識教育中心", "tch": "吳憶蘭", "cos_name": "國文", "name": "天使心家族社會福利基金會", "position": "25.060300474323537, 121.54616844154285", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "68", "dept": "護理系", "tch": "曾建寧", "cos_name": "多元文化與照護(A)", "name": "深坑區", "position": "25.004360451343725, 121.4915380174067", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "46" },
    { "no": "69", "dept": "護理系", "tch": "曾建寧", "cos_name": "多元文化與照護(B)", "name": "深坑區", "position": "25.004360451343725, 121.4915380174067", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "46" },
    { "no": "70", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "計算機概論", "name": "亞東技術學院樂齡大學", "position": "24.99544680793257, 121.45311889736213", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "71", "dept": "通識教育中心", "tch": "郭富良", "cos_name": "全球環境變遷與永續發展", "name": "新北市滿月圓森林遊樂區", "position": "24.83059566104933, 121.44467181085098", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "72", "dept": "通識教育中心", "tch": "黃啟峰", "cos_name": "國文", "name": "新北市私立迦南老人長期照顧中心", "position": "25.00732427590839, 121.45894782804947", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "73", "dept": "通識教育中心", "tch": "鄧碧雲", "cos_name": "體育(籃球)", "name": "亞東體育室", "position": "24.99544680793257, 121.45311889736213", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "20" },
    { "no": "74", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(A班)", "name": "亞東醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "75", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(B班)", "name": "亞東醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "76", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "機能性紡織品", "name": "新北市家扶發展學園", "position": "24.99299033718957, 121.45308151085426", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "30" },
    { "no": "77", "dept": "行銷與流通管理系", "tch": "林致祥", "cos_name": "數位行銷與銀髮族安心舒活", "name": "亞東醫院、亞東醫院捷運", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "3", "pople_num": "40" },
    { "no": "78", "dept": "通識教育中心", "tch": "歐任淳", "cos_name": "環境生態與倫理", "name": "基隆市八斗子產業觀光促進會", "position": "25.141366656587827, 121.79640671270862", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "79", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大二英文", "name": "台北市衛理幼兒園", "position": "25.039807079297024, 121.53307170309085", "cos_type": "專業應用", "hours": "2", "pople_num": "40" },
    { "no": "80", "dept": "通識教育中心", "tch": "黃振華", "cos_name": "桌球", "name": "新北市身障桌球協會", "position": "25.028114540154434, 121.46304855814131", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "50" },
    { "no": "81", "dept": "護理系", "tch": "吳孟凌", "cos_name": "老人護理學", "name": "新翔/迦勒護理之家", "position": "24.992256082332332, 121.42961300657468", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "82", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "雲端服務與行動科技", "name": "臺北區中山社區大學", "position": "25.066093536021874, 121.5286219685276", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "83", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "服飾構成與製作實習（二）", "name": "新北市家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "45" },
    { "no": "84", "dept": "電機系", "tch": "王信雄", "cos_name": "機器人整合控制", "name": "新北高工電機科", "position": "24.982438884069772, 121.45141008572064", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "85", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務（A）", "name": "亞東紀念醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "42" },
    { "no": "86", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務（B）", "name": "亞東紀念醫院", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "43" },
    { "no": "87", "dept": "通識教育中心", "tch": "郭富良", "cos_name": "全球環境變遷與永續發展", "name": "石門海灘", "position": "25.28456999576387, 121.51716251217788", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "88", "dept": "通識教育中心", "tch": "歐任淳", "cos_name": "環境生態與倫理", "name": "基隆市八斗子產業觀光促進會", "position": "25.14125982002453, 121.79650327223159", "cos_type": "環境保育", "hours": "2", "pople_num": "50" },
    { "no": "89", "dept": "通訊工程系", "tch": "謝昇達", "cos_name": "通信線路檢定", "name": "遠傳電信", "position": "24.998265659152587, 121.45711159008978", "cos_type": "專業應用", "hours": "3", "pople_num": "32" },
    { "no": "90", "dept": "通識教育中心", "tch": "吳憶蘭", "cos_name": "國文", "name": "天使心家族社會福利基金會", "position": "25.060261598916927, 121.54607188201987", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "91", "dept": "通訊工程系", "tch": "何健鵬", "cos_name": "通信系統實習", "name": "遠傳電信", "position": "24.998265659152587, 121.45711159008978", "cos_type": "專業應用", "hours": "1", "pople_num": "40" },
    { "no": "92", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "台北衛理堂致福益人學院(銀髮英語會話)", "position": "25.041052273355042, 121.53298047544885", "cos_type": "專業應用", "hours": "2", "pople_num": "50" },
    { "no": "93", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "醫療機構生產管理與質量控制", "name": "天主教輔仁大學附設醫院", "position": "25.04043073351679, 121.43129768387065", "cos_type": "醫療照護", "hours": "2", "pople_num": "42" },
    { "no": "94", "dept": "電子工程系", "tch": "董慧香", "cos_name": "數位邏輯設計實習", "name": "中華中學", "position": "24.975645938969034, 121.43741947430708", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "95", "dept": "護理系", "tch": "吳孟凌", "cos_name": "護理個案報告撰寫(A班)", "name": "迦勒護理之家", "position": "25.006784486128396, 121.45608681114078", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "96", "dept": "護理系", "tch": "吳孟凌", "cos_name": "護理個案報告撰寫(B班)", "name": "新北市家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "97", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "資訊管理概論", "name": "臺北市中山社區大學", "position": "25.06597691527938, 121.52863269736349", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "98", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(A班)", "name": "兒童、老年、動物、警局、博物館、基金會", "position": "24.997190444047703, 121.45292380678717", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "99", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(B班)", "name": "兒童、老年、動物、警局、博物館、基金會", "position": "24.997190444047703, 121.45292380678717", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "100", "dept": "護理系", "tch": "曾建寧", "cos_name": "多元文化護理(A班)", "name": "亞東醫院長照樂智社區服務據點", "position": "24.99731379940304, 121.45294723598792", "cos_type": "醫療照護", "hours": "2", "pople_num": "46" },
    { "no": "101", "dept": "護理系", "tch": "曾建寧", "cos_name": "多元文化護理(B班)", "name": "亞東醫院長照樂智社區服務據點", "position": "24.99731379940304, 121.45294723598792", "cos_type": "醫療照護", "hours": "2", "pople_num": "46" },
    { "no": "102", "dept": "材料與纖維系", "tch": "高榮美", "cos_name": "立體剪裁", "name": "台北市華江國小武術隊", "position": "25.034176193833048, 121.49126043242146", "cos_type": "專業應用", "hours": "3", "pople_num": "47" },
    { "no": "103", "dept": "通識教育中心", "tch": "黃啟峰", "cos_name": "國文", "name": "新北市私立迦順老人長期照顧中心", "position": "25.007333998955776, 121.45886199736238", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "104", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "計算機概論-A", "name": "亞東技術學院樂齡大學", "position": "24.995349568016408, 121.45317254154155", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "105", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "計算機概論-B", "name": "亞東技術學院樂齡大學", "position": "24.995349568016408, 121.45317254154155", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "106", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "主愛全人關懷中心/新北市榮光育幼院", "position": "25.085747656641363, 121.4731284550357", "cos_type": "專業應用", "hours": "2", "pople_num": "40" },
    { "no": "107", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "藝術史", "name": "新北市家扶中心", "position": "24.99293199208295, 121.45311369736191", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "108", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務(A班)", "name": "亞東醫院、社區", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "42" },
    { "no": "109", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務(B班)", "name": "亞東醫院、社區", "position": "24.997247270188783, 121.45286298201856", "cos_type": "醫療照護", "hours": "2", "pople_num": "43" },
    { "no": "110", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "蘆洲主愛全人關懷協會", "position": "25.085611620934568, 121.47298898016916", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "111", "dept": "護理系", "tch": "吳孟凌", "cos_name": "老人護理學", "name": "新北私立松和長期照顧中心", "position": "24.992534265450587, 121.42935009921322", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "112", "dept": "行銷與流通管理系", "tch": "黃斐慧", "cos_name": "通路管理(A班)", "name": "台灣浪浪釋站動物緊急救援協會", "position": "25.23882031327204, 121.53062969683967", "cos_type": "動物保護", "hours": "3", "pople_num": "45" },
    { "no": "113", "dept": "行銷與流通管理系", "tch": "黃斐慧", "cos_name": "通路管理(B班)", "name": "台灣浪浪釋站動物緊急救援協會", "position": "25.23882031327204, 121.53062969683967", "cos_type": "動物保護", "hours": "3", "pople_num": "45" },
    { "no": "114", "dept": "通識教育中心", "tch": "鄧碧雲", "cos_name": "體育(籃球)", "name": "亞東體育室(身障籃球育樂營)", "position": "25.000853877633517, 121.45321598777225", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "115", "dept": "電子工程系", "tch": "董慧香", "cos_name": "數位系統設計", "name": "高職學校2所(豫章工商)", "position": "24.997311998582468, 121.45891193783909", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "116", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "製衣工程實務", "name": "新北家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "弱勢陪伴", "hours": "3", "pople_num": "50" },
    { "no": "117", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "使用者頁面設計", "name": "亞東技術學院樂齡大學", "position": "24.995349568016408, 121.45317254154155", "cos_type": "專業應用", "hours": "2", "pople_num": "20" },
    { "no": "118", "dept": "材料與纖維系", "tch": "高榮美", "cos_name": "立體裁剪(二)", "name": "華江國小武術隊", "position": "25.034114368451284, 121.49126232703537", "cos_type": "專業應用", "hours": "3", "pople_num": "47" },
    { "no": "119", "dept": "電子工程系", "tch": "陳麗玲", "cos_name": "微處理機實習(A、C班)", "name": "高職學校2所(豫章工商)", "position": "24.997311998582468, 121.45891193783909", "cos_type": "專業應用", "hours": "1", "pople_num": "30" },
    { "no": "120", "dept": "行銷與流通管理系", "tch": "黃斐慧", "cos_name": "流通概論(A)", "name": "社團法人台灣浪浪驛站動物緊急救援協會", "position": "25.23882031327204, 121.53062969683967", "cos_type": "動物保護", "hours": "3", "pople_num": "40" },
    { "no": "121", "dept": "行銷與流通管理系", "tch": "黃斐慧", "cos_name": "流通概論(B)", "name": "社團法人台灣浪浪驛站動物緊急救援協會", "position": "25.23882031327204, 121.53062969683967", "cos_type": "動物保護", "hours": "3", "pople_num": "40" },
    { "no": "122", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "影像處理(A)", "name": "台北市中山社區大學", "position": "25.065996352077494, 121.52872925688646", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "123", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "影像處理(B)", "name": "台北市中山社區大學", "position": "25.065996352077494, 121.52872925688646", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "124", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(A)", "name": "亞東紀念醫院等非營利機構", "position": "24.99722313051471, 121.45290619274223", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "125", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(B)", "name": "亞東紀念醫院等非營利機構", "position": "24.99722313051471, 121.45290619274223", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "126", "dept": "護理系", "tch": "吳孟凌", "cos_name": "老人護理學", "name": "(1)新北市私立松和長期照顧中心(2)新北市私立新翔護理之家", "position": "24.992534265450587, 121.42935009921322", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "127", "dept": "護理系", "tch": "曾建寧", "cos_name": "多元文化護理(A)", "name": "亞東醫院長照樂智社區服務據點", "position": "24.99730860908977, 121.45288022393122", "cos_type": "醫療照護", "hours": "2", "pople_num": "46" },
    { "no": "128", "dept": "護理系", "tch": "曾建寧", "cos_name": "多元文化護理(B)", "name": "亞東醫院長照樂智社區服務據點", "position": "24.99730860908977, 121.45288022393122", "cos_type": "醫療照護", "hours": "2", "pople_num": "46" },
    { "no": "129", "dept": "電機系", "tch": "王信雄", "cos_name": "機器人整合控制", "name": "新北高工電機科", "position": "24.9825555842154, 121.45138862804887", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "130", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "女裝丙級證照", "name": "新北市家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "弱勢陪伴", "hours": "1", "pople_num": "40" },
    { "no": "131", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "蘆洲主愛全人關懷協會", "position": "25.085611620934568, 121.47298898016916", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "132", "dept": "電子工程系", "tch": "董慧香", "cos_name": "數位邏輯設計實習", "name": "高職學校約2所(電子科、電機科、資訊科與控制科等相關科系)及校內他系", "position": "24.982565309222547, 121.45117405133111", "cos_type": "專業應用", "hours": "3", "pople_num": "45" },
    { "no": "133", "dept": "材料與纖維系", "tch": "徐秋宜", "cos_name": "服裝設計", "name": "梅門新北市銀髮俱樂部", "position": "25.0081345718635, 121.45803886563833", "cos_type": "專業應用", "hours": "3", "pople_num": "60" },
    { "no": "134", "dept": "工業管理系", "tch": "柯亞先", "cos_name": "行銷傳播與文化創意", "name": "新北市板橋區湳雅觀光夜市自治管理委員會", "position": "25.005602894220797, 121.455679755034", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "135", "dept": "通識教育中心", "tch": "黃振華", "cos_name": "體育(桌球)", "name": "新北市身心障礙者桌球協會", "position": "25.030651036565057, 121.46254240309239", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "50" },
    { "no": "136", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "資訊管理導論(A)", "name": "台北市中山社區大學", "position": "25.065996352077494, 121.52872925688646", "cos_type": "社區服務", "hours": "3", "pople_num": "40" },
    { "no": "137", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "資訊管理導論(B)", "name": "台北市中山社區大學", "position": "25.065996352077494, 121.52872925688646", "cos_type": "社區服務", "hours": "3", "pople_num": "40" },
    { "no": "138", "dept": "行銷與流通管理系", "tch": "黃斐慧", "cos_name": "通路管理(A)", "name": "社團法人台灣浪浪驛站動物緊急救援協會", "position": "25.23882031327204, 121.53062969683967", "cos_type": "動物保護", "hours": "3", "pople_num": "35" },
    { "no": "139", "dept": "行銷與流通管理系", "tch": "黃斐慧", "cos_name": "通路管理(B)", "name": "社團法人台灣浪浪驛站動物緊急救援協會", "position": "25.23882031327204, 121.53062969683967", "cos_type": "動物保護", "hours": "3", "pople_num": "35" },
    { "no": "140", "dept": "工商業設計系", "tch": "劉育君", "cos_name": "創意發想與設計(A)", "name": "聯順居家護理所", "position": "25.019018092274948, 121.47291335318319", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "141", "dept": "工商業設計系", "tch": "劉育君", "cos_name": "創意發想與設計(B)", "name": "聯順居家護理所", "position": "25.019018092274948, 121.47291335318319", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "142", "dept": "護理系", "tch": "吳孟凌", "cos_name": "護理個案報告撰寫", "name": "松和護理之家", "position": "24.992417574776674, 121.42924281085436", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "143", "dept": "體育室", "tch": "鄧碧雲", "cos_name": "體育(籃球)", "name": "亞東技術學院體育室", "position": "25.000853877633517, 121.45321598777225", "cos_type": "弱勢陪伴", "hours": "0", "pople_num": "40" },
    { "no": "144", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "蘆洲主愛全人關懷協會", "position": "25.085533886177075, 121.47310699736393", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "145", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "網頁設計", "name": "亞東技術學院 樂齡大學", "position": "24.995349568016408, 121.45311889736213", "cos_type": "專業應用", "hours": "3", "pople_num": "80" },
    { "no": "146", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "設計史", "name": "新北市家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "30" },
    { "no": "147", "dept": "材料與纖維系", "tch": "徐秋宜", "cos_name": "流行服飾商品企劃", "name": "大安區古風里南機場社區", "position": "25.022106156275946, 121.5298204572254", "cos_type": "專業應用", "hours": "3", "pople_num": "15" },
    { "no": "148", "dept": "電子系", "tch": "陳麗玲", "cos_name": "感知器互動應用設計", "name": "高職學校約2所(電子科、電機科、資訊科與控制科等相關科系)", "position": "24.982565309222547, 121.45117405133111", "cos_type": "專業應用", "hours": "3", "pople_num": "26" },
    { "no": "149", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "影像處理(A班)", "name": "中山社區大學", "position": "25.06598663367883, 121.52867561270703", "cos_type": "社區服務", "hours": "3", "pople_num": "45" },
    { "no": "150", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "影像處理(B班)", "name": "中山社區大學", "position": "25.06598663367883, 121.52867561270703", "cos_type": "社區服務", "hours": "3", "pople_num": "45" },
    { "no": "151", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "計算機概論(A班)", "name": "亞東技術學院 樂齡大學", "position": "24.995349568016408, 121.45311889736213", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "152", "dept": "資訊管理系", "tch": "葉乙璇", "cos_name": "計算機概論(B班)", "name": "亞東技術學院 資管系/臨近學校", "position": "24.995349568016408, 121.45311889736213", "cos_type": "專業應用", "hours": "3", "pople_num": "40" },
    { "no": "153", "dept": "電子工程系", "tch": "董慧香", "cos_name": "數位邏輯設計實習", "name": "高職學校約2所(新北高工電機科)", "position": "24.982565309222547, 121.45117405133111", "cos_type": "專業應用", "hours": "1", "pople_num": "45" },
    { "no": "154", "dept": "護理系", "tch": "曾建寧", "cos_name": "高齡運動與休閒", "name": "亞東醫院  長照樂智社區", "position": "24.99731379940304, 121.45294723598792", "cos_type": "醫療照護", "hours": "2", "pople_num": "39" },
    { "no": "155", "dept": "護理系", "tch": "吳孟凌", "cos_name": "老人護理學", "name": "松和長期照顧中心  新翔護理之家", "position": "24.992417574776674, 121.4292964550338", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "156", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "醫療機構生產管理與質量控制", "name": "輔仁大學附設醫院", "position": "25.040498776476426, 121.43124403969122", "cos_type": "醫療照護", "hours": "2", "pople_num": "30" },
    { "no": "157", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "大一英文", "name": "蘆洲主愛全人關懷協會", "position": "25.085611620934568, 121.47317137037925", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "158", "dept": "通識教育中心", "tch": "黃啟峰", "cos_name": "國文", "name": "迦順老人長照中心  慈嘉老人長照中心", "position": "25.007353445048263, 121.4589049127059", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "159", "dept": "材料與纖維系", "tch": "徐秋宜", "cos_name": "創意思考與美學設計", "name": "大安區古風里南機場社區", "position": "25.02849279706246, 121.50701316066908", "cos_type": "專業應用", "hours": "2", "pople_num": "40" },
    { "no": "160", "dept": "材料與纖維系", "tch": "高榮美", "cos_name": "立體裁剪(一)", "name": "國立台灣圖書館", "position": "25.00166274811056, 121.51265998201858", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "161", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "機能性紡織品", "name": "新北市家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "40" },
    { "no": "162", "dept": "工商業設計系", "tch": "劉育君", "cos_name": "創意發想與設計", "name": "聯順居家護理所", "position": "25.019018092274948, 121.47285970900377", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "50" },
    { "no": "163", "dept": "電子系", "tch": "陳麗玲", "cos_name": "行動裝置專業製作", "name": "華德里社區", "position": "24.99451215893682, 121.4522514832992", "cos_type": "專業應用", "hours": "3", "pople_num": "30" },
    { "no": "164", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(A班)", "name": "亞東醫院等  非營利機構", "position": "24.997291666247836, 121.45293513171828", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "165", "dept": "醫務管理系", "tch": "黃芬芬", "cos_name": "人際關係與溝通(B班)", "name": "亞東醫院等  非營利機構", "position": "24.997291666247836, 121.45293513171828", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "45" },
    { "no": "166", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "資訊管理導論(A班)", "name": "中山社區大學", "position": "25.065996352077494, 121.52867561270703", "cos_type": "社區服務", "hours": "3", "pople_num": "40" },
    { "no": "167", "dept": "資訊管理系", "tch": "蔡文隆", "cos_name": "資訊管理導論(B班)", "name": "中山社區大學", "position": "25.065996352077494, 121.52867561270703", "cos_type": "社區服務", "hours": "3", "pople_num": "40" },
    { "no": "168", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務(A班)", "name": "啟新健檢機構", "position": "25.064571946981307, 121.53654443969175", "cos_type": "醫療照護", "hours": "2", "pople_num": "42" },
    { "no": "169", "dept": "醫務管理系", "tch": "陳銘樹", "cos_name": "健康促進理論與實務(B班)", "name": "啟新健檢機構", "position": "25.064571946981307, 121.53654443969175", "cos_type": "醫療照護", "hours": "2", "pople_num": "42" },
    { "no": "170", "dept": "材料與纖維系", "tch": "徐秋宜", "cos_name": "流行服裝商品企劃", "name": "大安區古風里南機場社區", "position": "25.022106156275946, 121.5298204572254", "cos_type": "專業應用", "hours": "3", "pople_num": "50" },
    { "no": "171", "dept": "材料與纖維系", "tch": "賴文魁", "cos_name": "設計史", "name": "新北市家扶發展學園", "position": "24.99293199208295, 121.45311369736191", "cos_type": "專業應用", "hours": "2", "pople_num": "44" },
    { "no": "172", "dept": "材料與纖維系", "tch": "高榮美", "cos_name": "電腦打版實務", "name": "萬華區富福里開心農場", "position": "25.03419535599271, 121.50409599736295", "cos_type": "專業應用", "hours": "2", "pople_num": "20" },
    { "no": "173", "dept": "護理系", "tch": "曾建寧", "cos_name": "另類輔助療法", "name": "亞東醫院長照樂智社區服務據點", "position": "24.99727644172125, 121.45290589736211", "cos_type": "醫療照護", "hours": "2", "pople_num": "50" },
    { "no": "174", "dept": "護理系", "tch": "彭熙寧", "cos_name": "關懷與溝通", "name": "亞東醫院長照樂智社區服務據點", "position": "24.99727644172125, 121.45290589736211", "cos_type": "醫療照護", "hours": "2", "pople_num": "45" },
    { "no": "175", "dept": "工商業設計系", "tch": "劉育君", "cos_name": "創意發想與設計", "name": "聯順居家護理所", "position": "25.018940315275007, 121.47298845503441", "cos_type": "專業應用", "hours": "0", "pople_num": "30" },
    { "no": "176", "dept": "通識教育中心", "tch": "羅玉冰", "cos_name": "英文", "name": "蘆洲主愛全人關懷協會", "position": "25.08557275356199, 121.47311408497121", "cos_type": "弱勢陪伴", "hours": "2", "pople_num": "30" },
    { "no": "177", "dept": "通識教育中心", "tch": "鄧碧雲", "cos_name": "體育(籃球)", "name": "亞東技術學院體育室", "position": "25.0010260786294, 121.45327110106463", "cos_type": "弱勢陪伴", "hours": "", "pople_num": "" },
    { "no": "178", "dept": "電子工程系", "tch": "陳麗玲", "cos_name": "感知器互動應用設計", "name": "國高中職學校2所", "position": "24.997331446261292, 121.45915870106451", "cos_type": "專業應用", "hours": "", "pople_num": "" }

]