import { Car, CarInteriorFeatureText } from './types';

export const SITE_URL = "https://bandungsuzuki.com"; // PENTING: Ganti dengan nama domain Anda yang sebenarnya

export const WHATSAPP_NUMBER = "6281318902428";
export const INSTAGRAM_URL = "https://instagram.com/suzukibandung.co";
export const TIKTOK_URL = "https://tiktok.com/@suzukibandung.co";

export const HANDOVER_IMAGES = [
  "https://i.imghippo.com/files/mx2990mg.jpg",
  "https://i.imghippo.com/files/XxJC3910ypY.jpg",
  "https://i.imghippo.com/files/btee5059niA.jpg",
  "https://i.imghippo.com/files/sMl3291IbM.jpg",
  "https://i.imghippo.com/files/FCw3860Kk.jpg",
  "https://i.imghippo.com/files/yuc8901Qmg.jpg",
  "https://i.imghippo.com/files/Ycxq4167BSw.jpg",
  "https://i.imghippo.com/files/qEC2778Y.jpg",
  "https://i.imghippo.com/files/flf5635gM.jpg",
  "https://i.imghippo.com/files/CeFy2126XSo.jpg",
  "https://i.imghippo.com/files/jAas7136rXo.jpg",
  "https://i.imghippo.com/files/CiDp9063LQ.jpg"
];


export const CARS_DATA: Car[] = [
  {
    id: "fronx",
    name: "FRONX",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2Fdetails%2Fdesktop%2Faksesorinewbannerdesktopvers_1748336857088.png&w=1920&q=75",
    description: "SUV kompak terbaru dengan desain modern, performa tangguh, dan fitur canggih untuk pengalaman berkendara yang menyenangkan di perkotaan.",
    variants: [
      { type: "GL MT", price: 261800000 },
      { type: "GL AT", price: 273800000 },
      { type: "GX MT", price: 278600000 },
      { type: "GX AT", price: 296600000 },
      { type: "SGX AT", price: 322600000 },
      { type: "SGX AT 2 TONE", price: 324600000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15B / K15C + SHVS" },
      { key: "Tenaga Maksimal", value: "104.7 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "138 Nm @ 4400 rpm" },
      { key: "Transmisi", value: "5-Speed MT / 4-Speed AT" },
      { key: "Dimensi (P x L x T)", value: "3995 x 1765 x 1550 mm" },
    ],
    colorGroups: [
      {
        variantGroup: "GL MT / GL AT",
        colors: [
          { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLcoolblack_1748358708241.png&w=384&q=75" },
          { name: "Magma Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLMagmagrey_1748358733268.png&w=384&q=75" },
          { name: "Snow White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLsnowwhite_1748858530069.png&w=384&q=75" }
        ]
      },
      {
        variantGroup: "GX MT / GX AT",
        colors: [
          { name: "Magma Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXmagmagrey_1748359284935.png&w=384&q=75" },
          { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXcoolblack_1748359046983.png&w=384&q=75" },
          { name: "Snow White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXsnowwhite_1748858607349.png&w=384&q=75" },
          { name: "Savana Ivory", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXsavanaivory_1748858664829.png&w=384&q=75" }
        ]
      },
      {
        variantGroup: "SGX AT",
        colors: [
          { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXATS%2Fcolors%2FGXcoolblack_1748359636227.png&w=384&q=75" },
          { name: "Snow White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00SXATS%2Fcolors%2FSGXsnowwhite(flip)_1755157326466.png&w=384&q=75" },
          { name: "Savanna Ivory", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00SXATS%2Fcolors%2FSGXsavannaivory(flip)_1755157278203.png&w=384&q=75" }
        ]
      },
      {
        variantGroup: "SGX AT 2 TONE",
        colors: [
          { name: "Ice Grayish Blue + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM01SXATS%2Fcolors%2FSGX-ICEGRAYISHBLUE-BLACKdesktop_1748360026875.png&w=384&q=75" },
          { name: "Snow White + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM01SXATS%2Fcolors%2FSGXSNOWWHITE_1748858881588.png&w=384&q=75" },
          { name: "Savanna Ivory + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM01SXATS%2Fcolors%2FSGX-SAVANNAIVORY-BLACKDESKTOP_1748858916591.png&w=384&q=75" }
        ]
      }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2Fthree-six-zero%2Finterior%2Fdesktop%2FInteriorDesktopvers_1748364160113.png&w=2048&q=75",
    interiorFeatures: [
        { title: 'Marvelous 9” Touchscreen Head Unit (SGX & GX Only)', description: 'Nikmati sistem infotainment yang membuat setiap perjalanan lebih menyenangkan, sekaligus memudahkan Anda memeriksa status kendaraan.' },
        { title: 'Apple CarPlay', description: 'Hubungkan iPhone Anda secara wireless atau dengan USB untuk menerima panggilan, mendengarkan musik, serta membaca atau mendikte pesan.' },
        { title: 'Android Auto', description: 'Akses berbagai aplikasi dari Google tanpa mengganggu fokus saat berkendara dengan menghubungkan Android Anda dengan kabel USB.' },
        { title: 'Wireless Charger', description: 'Berkelana ke mana saja tanpa khawatir dengan ponsel pintar Anda, karena ada Qi wireless charging untuk mengisi daya.' },
        { title: 'Paddle Shift (SGX & GX AT Only)', description: 'Ambil kendali di setiap perjalanan Anda di berbagai kondisi dengan paddle shifter.' },
        { title: 'Steering Wheels With Cruise Control (SGX & GX Only)', description: 'Ambil kendali di setiap perjalanan Anda di berbagai kondisi dengan tombol kontrol jelajah.' },
        { title: 'Tilt & Telescopic (SGX Only) Steering', description: 'Atur posisi berkendara ternyaman Anda dengan menyesuaikan tilt dan telescoping steering.' },
        { title: 'Auto Climate AC (SGX & GX Only)', description: 'Kabin selalu berada di suhu yang tepat dengan AC intuitif yang menyesuaikan secara otomatis dengan iklim.' },
        { title: 'Glove Box', description: 'Dengan ruang yang cukup luas, menjaga perlengkapan berkendara tetap terjangkau namun tersembunyi.' },
        { title: 'Cup Holder', description: 'Dirancang agar minuman Anda tetap stabil dan tidak tumpah di perjalanan sehari-hari.' },
        { title: 'Front Door Trim Pocket', description: 'Penyimpanan yang praktis untuk barang-barang berukuran kecil agar kabin terorganisir.' },
        { title: 'Armrest Storage', description: 'Berada di bawah sandaran tangan, kompartemen ini ideal untuk menyimpan barang berharga tetap aman.' },
        { title: 'Seat Back Pocket', description: 'Kantong di belakang kursi depan ini memudahkan Anda menyimpan barang yang tipis.' },
        { title: 'Rear Door Trim Pocket', description: 'Memberikan ruang tambahan bagi penumpang dalam menyimpan botol minum atau barang kecil lainnya.' },
        { title: '2nd Row AC & USB Port (A&C)', description: 'Baris kedua dilengkapi dengan AC dan port USB Type A & C, untuk kenyamanan dan kemudahan mengisi daya perangkat.' },
        { title: 'Synthetic Leather (SGX Only) + Fabrics Material', description: 'Didesain khusus untuk memberikan kenyamanan luar biasa bagi pengemudi dan semua penumpang.' },
        { title: 'Spacious Baggage', description: 'Ke mana pun tujuan Anda, Fronx selalu siap membawa semua barang Anda dengan kapasitas 304L.' },
        { title: 'Rear Lower Spacious Cabin', description: 'Nikmati kabin yang luas dan nyaman untuk semua penumpang di belakang.' }
    ]
  },
  {
    id: "jimny-3-door",
    name: "JIMNY 3 DOOR",
    image: "https://imgcdn.oto.com/large/gallery/exterior/37/782/suzuki-jimny-front-angle-low-view-177244.jpg?tr=w-510,h-340",
    description: "SUV legendaris yang siap menaklukkan segala medan. Desain ikonik, kemampuan off-road superior, dan ketangguhan yang teruji.",
    variants: [
      { type: "MT", price: 511550000 },
      { type: "AT", price: 524000000 },
      { type: "MT 2 TONE", price: 514850000 },
      { type: "AT 2 TONE", price: 527300000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15B" },
      { key: "Tenaga Maksimal", value: "102 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "130 Nm @ 4000 rpm" },
      { key: "Transmisi", value: "5-Speed MT / 4-Speed AT" },
      { key: "Sistem Penggerak", value: "4x4 AllGrip Pro" },
    ],
    colorGroups: [
        {
            variantGroup: "MT / AT",
            colors: [
                { name: "Jungle Green", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage385_1713433798682.jpg&w=384&q=75" },
                { name: "Medium Gray", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage383_1713435037702.jpg&w=384&q=75" },
                { name: "White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage384_1713435116638.jpg&w=384&q=75" },
                { name: "Silky Silver Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage386_1713435248031.jpg&w=384&q=75" },
                { name: "Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage382_1713435352480_1730346730827.jpg&w=384&q=75" },
            ]
        },
        {
            variantGroup: "MT 2 TONE / AT 2 TONE",
            colors: [
                { name: "Kinetic Yellow + Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00002ATP%2Fcolors%2Fimage387_1713433881455.jpg&w=384&q=75" },
                { name: "Chiffon Ivory Metallic + Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00002ATP%2Fcolors%2Fimage388_1713434878941.jpg&w=384&q=75" },
                { name: "Brisk Blue Metallic + Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00002ATP%2Fcolors%2Fimage381_1713434931928.jpg&w=384&q=75" },
            ]
        }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2Fthree-six-zero%2Finterior%2Fdesktop%2FInteriordesktopvers_1722243266909.webp&w=2048&q=75",
    interiorFeatures: [
        { title: 'Auto Climate AC with Heather', description: 'Kontrol suhu otomatis yang canggih, dilengkapi pemanas (heater) untuk kenyamanan maksimal di segala cuaca.' },
        { title: '6,8" Touchscreen Head Unit', description: 'Pusat hiburan dengan layar sentuh 6,8 inci yang intuitif, mendukung konektivitas untuk musik dan panggilan.' }
    ]
  },
  {
    id: "jimny-5-door",
    name: "JIMNY 5 DOOR",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fhighlights%2Fdesktop%2FDesktop_Frame16220(2)_1713761333474_1721715492468.jpg&w=1920&q=75",
    description: "DNA off-road Jimny yang legendaris kini hadir dengan kepraktisan 5 pintu. Ruang lebih lega, petualangan tanpa batas.",
    variants: [
      { type: "MT", price: 496100000 },
      { type: "AT", price: 508700000 },
      { type: "MT 2 TONE", price: 499350000 },
      { type: "AT 2 TONE", price: 511900000 },
      { type: "AT White Rhino", price: 522300000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15B" },
      { key: "Tenaga Maksimal", value: "102 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "130 Nm @ 4000 rpm" },
      { key: "Transmisi", value: "5-Speed MT / 4-Speed AT" },
      { key: "Dimensi (P x L x T)", value: "3985 x 1645 x 1720 mm" },
    ],
    colorGroups: [
      {
        variantGroup: "MT / AT",
        colors: [
          { name: "Granite Grey Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2FFrame16202_1713433821733.jpg&w=384&q=75" },
          { name: "Pearl Bluish Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2F5door-pearlbluishblack4_1723808032782.webp&w=384&q=75" },
          { name: "Jungle Green", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2FFrame16204_1713435972318.jpg&w=384&q=75" }
        ]
      },
      {
        variantGroup: "MT 2 TONE / AT 2 TONE",
        colors: [
          { name: "Celestial Blue Pearl Metallic + Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16199_1713431885380.jpg&w=384&q=75" },
          { name: "Sizzling Red Metallic + Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16201_1713431912949.jpg&w=384&q=75" },
          { name: "Kinetic Yellow + Bluish Black Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16198_1713432237530.jpg&w=384&q=75" }
        ]
      },
      {
        variantGroup: "AT White Rhino",
        colors: [
          { name: "White Rhino", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00013ATR%2Fcolors%2FJIMNY_Frontal_Limited_Edition_WHITE-JIMNY_5-DOORS_1732505074689.png&w=384&q=75" }
        ]
      }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2Fthree-six-zero%2Finterior%2Fdesktop%2FInteriordesktopvers_1722243266909.webp&w=2048&q=75",
    interiorFeatures: [
        { title: 'MID Interface', description: 'Panel instrumen yang fungsional dan mudah dibaca, memberikan semua informasi penting saat berkendara di berbagai medan.' },
        { title: 'Luggage', description: 'Ruang bagasi yang lega dan serbaguna, siap menampung semua perlengkapan petualangan Anda.' },
        { title: 'Manual Transmission', description: 'Transmisi manual 5-percepatan untuk kontrol penuh dan pengalaman off-road yang lebih otentik.' },
        { title: 'Automatic Transmission', description: 'Transmisi otomatis 4-percepatan yang responsif, memberikan kenyamanan berkendara di perkotaan maupun alam liar.' },
        { title: '9” Touch Screen Head Unit', description: 'Sistem hiburan canggih dengan layar sentuh 9 inci, dilengkapi konektivitas smartphone untuk navigasi dan hiburan.' },
        { title: 'Spacious Cabin', description: 'Kabin yang dirancang lebih luas untuk memberikan kenyamanan ekstra bagi semua penumpang dalam setiap perjalanan.' }
    ]
  },
  {
    id: "xl7-hybrid",
    name: "NEW XL7 HYBRID",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fthree-six-zero%2Fexterior%2Fdesktop%2FXL7Exteriorbanner1_1701944963321.png&w=2048&q=75",
    description: "The Extraordinary SUV dengan teknologi Smart Hybrid Vehicle by Suzuki (SHVS) yang ramah lingkungan dan efisien.",
    variants: [
      { type: "ZETA MT", price: 269900000 },
      { type: "ZETA AT", price: 281100000 },
      { type: "BETA MT HYBRID", price: 292000000 },
      { type: "BETA AT HYBRID", price: 303100000 },
      { type: "ALPHA MT HYBRID", price: 303300000 },
      { type: "ALPHA AT HYBRID", price: 314200000 },
      { type: "ALPHA MT HYBRID 2 TONE", price: 305300000 },
      { type: "ALPHA AT HYBRID 2 TONE", price: 316300000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15B + SHVS" },
      { key: "Tenaga Maksimal", value: "104.7 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "138 Nm @ 4400 rpm" },
      { key: "Transmisi", value: "5-Speed MT / 4-Speed AT" },
      { key: "Kapasitas Tempat Duduk", value: "7 Penumpang" },
    ],
    colorGroups: [
      {
        variantGroup: "ZETA",
        colors: [
          { name: "Pearl Brave Khaki", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FPearlBraveKhaki_1722508651816.webp&w=384&q=75" },
          { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FCoolBlack_1722508662565.webp&w=384&q=75" },
          { name: "Snow White Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FSnowWhitePearl_1722508670951.webp&w=384&q=75" },
          { name: "Metallic Magma Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FMetallicMagmaGrey_1722508682626.webp&w=384&q=75" }
        ]
      },
      {
        variantGroup: "BETA HYBRID",
        colors: [
          { name: "Pearl Brave Khaki", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FPearlBraveKhaki_1722508897373.webp&w=384&q=75" },
          { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FCoolBlack_1722508861295_1729850224059.webp&w=384&q=75" },
          { name: "Snow White Pearl", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FSnowWhitePearl_1722508919364.webp&w=384&q=75" },
          { name: "Metallic Magma Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FMetallicMagmaGrey_1722508929566.webp&w=384&q=75" }
        ]
      },
      {
        variantGroup: "ALPHA HYBRID",
        colors: [
          { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GSATP%2Fcolors%2FCoolBlack_1722509238546_1729665668184.webp&w=384&q=75" }
        ]
      },
      {
        variantGroup: "ALPHA HYBRID 2 TONE",
        colors: [
          { name: "Sunrise Orange + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.34GSATR%2Fcolors%2FSunriseOrange-Black_1722509264353.webp&w=384&q=75" },
          { name: "White + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.34GSATR%2Fcolors%2FWhite-Black_1722509273682.webp&w=384&q=75" },
          { name: "New Savanna Ivory + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.34GSATR%2Fcolors%2FNewSavannaIvory-Black_1722509283295_1728968756038_1729850391010.webp&w=384&q=75" }
        ]
      }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fthree-six-zero%2Finterior%2Fdesktop%2FXL7interior-baner1_1701945230978.png&w=2048&q=75",
    interiorFeatures: [
      { title: 'Extra Spacious Luggage', description: 'Kapasitas bagasi yang ekstra luas untuk membawa semua kebutuhan petualangan keluarga Anda.' },
      { title: 'Chrome Door Handle', description: 'Handle pintu dengan aksen chrome yang memberikan sentuhan mewah dan elegan.' },
      { title: 'Spoke Steering Wheel', description: 'Desain setir yang sporty dan ergonomis untuk kenyamanan dan kontrol maksimal.' },
      { title: 'Black Wood Instrument Panel Ornament', description: 'Ornamen panel instrumen dengan motif kayu hitam yang menambah kesan premium pada interior.' },
      { title: 'Stunning MID Color Dot + Gearshift Indicator (AT Only)', description: 'Panel instrumen modern dengan MID berwarna dan indikator perpindahan gigi (khusus AT).' },
      { title: 'E-mirror Touch Screen*', description: 'Kaca spion tengah digital dengan layar sentuh untuk visibilitas belakang yang lebih jelas.' },
      { title: 'CRUISE CONTROL', description: 'Fitur untuk menjaga kecepatan konstan secara otomatis, membuat perjalanan jauh lebih santai.' }
    ]
  },
  {
    id: "grand-vitara",
    name: "GRAND VITARA",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2Fthree-six-zero%2Fexterior%2Fdesktop%2Fvitaradesktopvers_1730194211065.png&w=2048&q=75",
    description: "SUV premium yang memadukan kemewahan, performa, dan teknologi hybrid untuk gaya hidup modern.",
    variants: [
      { type: "GX AT", price: 403200000 },
      { type: "GX AT 2 TONE", price: 406100000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15C + SHVS" },
      { key: "Tenaga Maksimal", value: "103 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "136.8 Nm @ 4400 rpm" },
      { key: "Transmisi", value: "6-Speed AT with Paddle Shifters" },
      { key: "Fitur Unggulan", value: "Panoramic Sunroof, Head-Up Display" },
    ],
    colorGroups: [
        {
            variantGroup: "GX AT",
            colors: [
                { name: "Pearl Midnight Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00000GXATP%2Fcolors%2FPEARLMIDNIGHTBLACKVITARACOLORSGX_1713499195666_1728911992465.png&w=384&q=75" },
                { name: "Pearl Celestial Blue", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00000GXATP%2Fcolors%2FPEARLCELESTIALBLUEVITARACOLORSGX_1713499163114_1729843365989.png&w=384&q=75" }
            ]
        },
        {
            variantGroup: "GX AT 2 TONE",
            colors: [
                { name: "Artic White Pearl + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00001GXATP%2Fcolors%2FSuzukiYFG_Front45%C3%83%C2%82%C3%82%C2%BAPassengerside_GXDualTone-ArticWhitePearlcopy_1724660265643_1729843732973.webp&w=384&q=75" },
                { name: "Splendid Silver + Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00001GXATP%2Fcolors%2Fvitara_1725610155479.png&w=384&q=75" }
            ]
        }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fthree-six-zero%2Finterior%2Fdesktop%2FFrame16039(1)_1711951809200.jpg&w=2048&q=75",
    interiorFeatures: [
        { title: 'Wireless Charger', description: 'Isi daya smartphone Anda dengan mudah tanpa kabel saat bepergian.' },
        { title: '360° View Camera', description: 'Empat kamera di sekeliling mobil memberikan peringatan jika ada halangan terdeteksi di sekitar.' },
        { title: 'Auto Dimming Inside Rear View Mirror', description: 'Teknologi kaca spion yang mengurangi silau dari sorot lampu di belakang.' },
        { title: 'Rear AC Vents', description: 'Memastikan aliran udara yang optimal dan kenyamanan bagi semua penumpang, bahkan di kursi belakang.' },
        { title: 'Rear USB Ports', description: 'Memberikan opsi pengisian daya yang nyaman bagi penumpang di belakang.' },
        { title: '6 Speed Automatic Transmission', description: 'Transmisi otomatis yang halus dan responsif, menawarkan perpindahan gigi yang mulus.' },
        { title: 'Premium Seat With Synthetic Leather (GX)', description: 'Jok premium dengan kulit sintetis berkualitas tinggi, memberikan kenyamanan luar biasa.' },
        { title: 'MID With Speedometers', description: 'Multi-Information Display (MID) modern memberikan informasi berkendara yang jelas dan komprehensif.' },
        { title: '9 Inch Head Unit Display (GX)', description: 'Menawarkan pengalaman infotainment yang mulus dengan layar sentuh responsif.' },
        { title: 'Spacious Luggage Views', description: 'Kapasitas bagasi yang luas, menyediakan ruang yang cukup untuk semua perlengkapan Anda.' },
        { title: 'Head Up Display', description: 'Berkendara tanpa mengalihkan pandangan dari jalan sambil memeriksa pembaruan tentang kendaraan Anda.' },
        { title: 'Paddle Shift + Cruise Control', description: 'Tingkatkan sensasi berkendara dan rasakan performa Suzuki Grand Vitara.' },
    ]
  },
  {
    id: "ertiga-hybrid",
    name: "ALL NEW ERTIGA HYBRID",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2Fthree-six-zero%2Fexterior%2Fdesktop%2FExteriordesktopvers_1721877348701.png&w=2048&q=75",
    description: "MPV keluarga yang nyaman, irit, dan ramah lingkungan berkat teknologi Suzuki Smart Hybrid.",
    variants: [
      { type: "GA", price: 241500000 },
      { type: "MC GL MT", price: 265350000 },
      { type: "MC GL AT", price: 276400000 },
      { type: "MC GX MT", price: 282000000 },
      { type: "MC GX AT", price: 293000000 },
      { type: "CRUISE MT", price: 294800000 },
      { type: "CRUISE MT 2 TONE", price: 296800000 },
      { type: "CRUISE AT", price: 305700000 },
      { type: "CRUISE AT 2 TONE", price: 307700000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15B + SHVS (Tipe GX & Cruise)" },
      { key: "Tenaga Maksimal", value: "104.7 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "138 Nm @ 4400 rpm" },
      { key: "Transmisi", value: "5-Speed MT / 4-Speed AT" },
      { key: "Kapasitas Tempat Duduk", value: "7 Penumpang" },
    ],
    colorGroups: [
        {
            variantGroup: "MC GL",
            colors: [
                { name: "Mellow Deep Red", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEMERAH_1726624631889.png&w=384&q=75" },
                { name: "Silky Silver", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANESILVER_1726624651818.png&w=384&q=75" },
                { name: "Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEHITAM_1726624662388.png&w=384&q=75" },
                { name: "Snow White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEPUTIH_1726624671886.png&w=384&q=75" },
                { name: "Magma Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEGREY_1726624685361.png&w=384&q=75" },
                { name: "Brave Red", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEMERAHMARUN_1726624586978.png&w=384&q=75" }
            ]
        },
        {
            variantGroup: "MC GX",
            colors: [
                { name: "Mellow Deep Red", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATmellowdeepredDesktopvers_1721882034945.webp&w=384&q=75" },
                { name: "Silky Silver Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATSILKYSILVERMETALLICdekstopvers_1721882050233.webp&w=384&q=75" },
                { name: "Cool Black Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATCOOLBLACKMETdekstopvers_1721882068988.webp&w=384&q=75" },
                { name: "Snow White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATSNOWWHITEdekstopvers_1721882081431.webp&w=384&q=75" },
                { name: "Metallic Magma Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATMET.MAGMAGRAY2desktopvers_1721882093820.webp&w=384&q=75" }
            ]
        },
        {
            variantGroup: "CRUISE",
            colors: [
                { name: "Cool Black Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM09SSATR%2Fcolors%2FCRUISEMTCOOLBLACKMETdesktopvers_1721883515042_1730104082528.webp&w=384&q=75" }
            ]
        },
        {
            variantGroup: "CRUISE 2 TONE",
            colors: [
                { name: "Pearl Snow White + Cool Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM19SSMTR%2Fcolors%2FCRUISEtwotoneHYBRIDMTDesktopVers_1721883503391_1730104177033.webp&w=384&q=75" }
            ]
        }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2Fthree-six-zero%2Finterior%2Fdesktop%2FDesktopinterioranecruisehybrid_1721126588435.webp&w=2048&q=75",
    interiorFeatures: [
        { title: '2nd Row Armrest (Cruise & GX)', description: 'Sandaran tangan di baris kedua untuk menambah kenyamanan penumpang.' },
        { title: 'AC Digital Auto Climate with Heater (Cruise & GX)', description: 'Kontrol suhu otomatis dengan pemanas untuk kenyamanan di segala kondisi cuaca.' },
        { title: 'Black & Gray Interior Ambience', description: 'Suasana interior elegan dengan kombinasi warna hitam dan abu-abu.' },
        { title: 'Cruise Control (Cruise & GX)', description: 'Menjaga kecepatan konstan secara otomatis untuk kenyamanan berkendara jarak jauh.' },
        { title: 'Head Unit 8 Inch Touchscreen with Mirroring (Cruise & GX)', description: 'Pusat hiburan dengan layar sentuh 8 inci yang mendukung konektivitas smartphone.' },
        { title: 'Large Luggage Capacity', description: 'Kapasitas bagasi yang luas untuk membawa semua barang bawaan keluarga.' },
        { title: 'Meter Cluster with MID (Cruise & GX)', description: 'Panel instrumen modern dengan Multi Information Display yang informatif.' },
        { title: 'Ventilated Cup Holder (Cruise & GX)', description: 'Tempat cangkir dengan ventilasi untuk menjaga minuman tetap dingin.' },
        { title: 'Interior Ornament', description: 'Aksen ornamen yang menambah kesan mewah pada interior.' },
        { title: 'Carbon Fiber Interior Ornament', description: 'Ornamen dengan motif carbon fiber yang memberikan sentuhan sporty.' },
        { title: 'Red Stitch Seat Cover', description: 'Jahitan merah pada sarung jok yang memberikan nuansa sporty dan eksklusif.' },
        { title: 'Push Start/Stop Button (Cruise & GX)', description: 'Menyalakan dan mematikan mesin dengan mudah hanya dengan satu sentuhan tombol.' }
    ]
  },
  {
    id: "s-presso",
    name: "S.PRESSO",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fdetails%2Fdesktop%2FBANNERSPRESSO(1928x830)_1723023772305.webp&w=1920&q=75",
    description: "City car kompak dengan ground clearance tinggi, memberikan sensasi mini SUV yang lincah dan irit.",
    variants: [
      { type: "MT", price: 176600000 },
      { type: "AT", price: 186600000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.0L K10B" },
      { key: "Tenaga Maksimal", value: "68 PS @ 5500 rpm" },
      { key: "Torsi Maksimal", value: "90 Nm @ 3500 rpm" },
      { key: "Transmisi", value: "5-Speed MT / 5-Speed AGS" },
      { key: "Ground Clearance", value: "180 mm" },
    ],
    colorGroups: [
        {
            variantGroup: "MT / AT",
            colors: [
                { name: "White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FWHITE_1723101492652.webp&w=384&q=75" },
                { name: "Silky Silver", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FSILVER_1723101504860.webp&w=384&q=75" },
                { name: "Sizzle Orange", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FORANGE_1723101525534.webp&w=384&q=75" },
                { name: "Granite Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FGREY_1723101538214.webp&w=384&q=75" }
            ]
        }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fthree-six-zero%2Finterior%2Fdesktop%2FFrame7(2)_1701848737381.png&w=2048&q=75",
    interiorFeatures: [
        { title: '7” Head Unit Touchscreen', description: 'Sistem hiburan modern dengan layar sentuh 7 inci dan konektivitas smartphone (Smart Linkage).' },
        { title: 'Digital Meter Cluster', description: 'Panel instrumen digital yang unik dan informatif, terletak di tengah dasbor.' },
        { title: 'Audio Steering Switch', description: 'Tombol kontrol audio di setir untuk kemudahan pengaturan tanpa melepas tangan dari kemudi.' },
        { title: 'Bluetooth Phone Connection', description: 'Hubungkan ponsel Anda secara nirkabel untuk panggilan hands-free dan streaming musik.' },
        { title: 'Electric Mirror Controller', description: 'Kontrol spion elektrik untuk penyesuaian yang mudah dari sisi pengemudi.' },
        { title: 'Control AC With Heater', description: 'Pengatur AC yang mudah dioperasikan, dilengkapi dengan pemanas untuk kenyamanan ekstra.' },
        { title: 'Spacious Luggage', description: 'Ruang bagasi yang lapang dan fleksibel untuk membawa berbagai macam barang kebutuhan Anda.' },
        { title: 'Front & Rear Console Pockets', description: 'Berbagai kantong dan kompartemen di konsol depan dan belakang untuk penyimpanan praktis.' },
        { title: 'Silver Door Ornament', description: 'Aksen ornamen perak di pintu yang memberikan sentuhan stylish pada interior.' },
    ]
  },
  {
    id: "new-carry-pickup",
    name: "NEW CARRY PICK-UP",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2Fimages%2FCARRY_WEBBANNER_1756702184220.png&w=2048&q=75",
    description: "Rajanya Pick Up. Kuat, tangguh, dan irit. Andalan usaha Anda dengan bak paling luas di kelasnya.",
    variants: [
      { type: "FD", price: 175500000 },
      { type: "FD AC PS", price: 183500000 },
      { type: "WD", price: 176600000 },
      { type: "WD AC PS", price: 184400000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L K15B-C" },
      { key: "Tenaga Maksimal", value: "97 PS @ 5600 rpm" },
      { key: "Torsi Maksimal", value: "135 Nm @ 4400 rpm" },
      { key: "Kapasitas Bak (P x L x T)", value: "2505 x 1745 x 425 mm" },
      { key: "Daya Angkut", value: "1 Ton" },
    ],
    colorGroups: [
        {
            variantGroup: "FD / WD",
            colors: [
                { name: "Superior White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle%5BFINAL%5D_1729075277330.png&w=384&q=75" },
                { name: "Silky Silver", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle-SILVER%5BFINAL%5D_1729075287755.png&w=384&q=75" },
                { name: "Real Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle-BLACK%5BFINAL%5D_1729075296284.png&w=384&q=75" }
            ]
        },
        {
            variantGroup: "FD AC PS / WD AC PS",
            colors: [
                { name: "Superior White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle%5BFINAL%5D_1729075277330.png&w=384&q=75" },
                { name: "Silky Silver", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle-SILVER%5BFINAL%5D_1729075287755.png&w=384&q=75" },
                { name: "Real Black", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle-BLACK%5BFINAL%5D_1729075296284.png&w=384&q=75" },
                { name: "Prime Graphite Grey", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FPrimeGraphiteGreyresize_1756091353206.png&w=384&q=75" }
            ]
        }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2Fthree-six-zero%2Finterior%2Fdesktop%2FINTERIORSECTION-DEKSTOP(2)_1728284971780.png&w=2048&q=75",
    interiorFeatures: [
        { title: 'Kotak Atas Penumpang', description: 'Tempat penyimpanan luas untuk menyimpan barang yang lebih besar.' },
        { title: 'Kotak Bawah Penumpang', description: 'Penyimpanan yang lebih dalam dan bisa memuat banyak barang.' },
        { title: 'Kotak Tengah Atas', description: 'Pas untuk meyimpan catatan kecil, kertas, kartu, atau barang-barang kecil.' },
        { title: 'Kotak Tengah Bawah', description: 'Bisa juga untuk menyimpan uang receh, atau barang-barang kecil yang mudah diambil.' },
        { title: 'Saku Jok Belakang', description: 'Untuk menyimpan catatan, peta, dokumen, dll.' },
        { title: 'Tempat Penyimpanan Botol', description: 'Untuk menaruh botol ditempat yang mudah diraih saat mengemudi.' }
    ]
  },
  {
    id: "apv",
    name: "APV",
    image: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2Fthree-six-zero%2Fexterior%2Fdesktop%2FBANNEREksteriorSection(1928x830)_1723457061635.webp&w=2048&q=75",
    description: "Kendaraan serbaguna yang handal untuk kebutuhan keluarga maupun usaha. Kabin lega dan mesin bertenaga.",
    variants: [
      { type: "GE BLIND VAN", price: 186700000 },
      { type: "GE PS MT AB", price: 228200000 },
      { type: "GL MT AB", price: 236400000 },
      { type: "GX MT AB", price: 250500000 },
      { type: "SGX MT AB", price: 253900000 },
    ],
    specifications: [
      { key: "Mesin", value: "1.5L G15A" },
      { key: "Tenaga Maksimal", value: "94.5 PS @ 6000 rpm" },
      { key: "Torsi Maksimal", value: "126 Nm @ 3000 rpm" },
      { key: "Transmisi", value: "5-Speed MT" },
      { key: "Kapasitas Tempat Duduk", value: "Hingga 8 Penumpang" },
    ],
    colorGroups: [
        {
            variantGroup: "GE BLIND VAN",
            colors: [
                { name: "White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M71BVMTP%2Fcolors%2FBlanvan_Flatt_FLIP_1726651060851.png&w=384&q=75" }
            ]
        },
        {
            variantGroup: "GL MT AB / GX MT AB",
            colors: [
                { name: "Cool Black Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxCoolblackmetallic_1726548085759_1729764787236.png&w=384&q=75" },
                { name: "Silver Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2Fsgxsilvermetallic_1726548105898.png&w=384&q=75" },
                { name: "Graphite Grey Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2Fsgxgraphitegreymetallic_1726548402005.png&w=384&q=75" },
                { name: "Burgundy", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxBurgandy_1726548381012.png&w=384&q=75" }
            ]
        },
        {
            variantGroup: "SGX MT AB",
            colors: [
                { name: "Cool Black Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxCoolblackmetallic_1726548085759_1729764787236.png&w=384&q=75" },
                { name: "Silver Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2Fsgxsilvermetallic_1726548105898.png&w=384&q=75" },
                { name: "Graphite Grey Metallic", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2Fsgxgraphitegreymetallic_1726548402005.png&w=384&q=75" },
                { name: "Burgundy", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxBurgandy_1726548381012.png&w=384&q=75" },
                { name: "Pearl White", imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxPearlwhite_1726548423175.png&w=384&q=75" }
            ]
        }
    ],
    interiorImageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2Fthree-six-zero%2Finterior%2Fdesktop%2FINTERIORAPV_1723627170090.png&w=2048&q=75",
    interiorFeatures: [
        { title: 'Console Box', description: 'Kotak konsol praktis untuk menyimpan barang-barang penting agar mudah dijangkau.' },
        { title: 'Speedometer', description: 'Panel instrumen yang jelas dan informatif untuk memantau kondisi kendaraan.' },
        { title: 'Captain Seat Yang Nyaman', description: 'Kursi model Captain Seat yang memberikan kenyamanan premium bagi penumpang.' },
        { title: 'Power Window', description: 'Kemudahan membuka dan menutup jendela dengan satu sentuhan tombol.' }
    ]
  },
];