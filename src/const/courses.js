const courseContent1 = [
  {time: '5:35 mins',title: 'Veri iletişimi',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL1DataCommInt.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Ağ modelleri',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL2NetworkModels.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Veri ve sinyaller',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Sayısal-sayısal, analog-sayısal dönüşümü ',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins',title: 'Sayısal-analog, analog-analog dönüşümü',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Multiplexing',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'İletim ortamları ',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Anahtarlama',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins',title: 'Telefon ve kablo TV ile veri iletişimi ',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Hata bulma ve düzeltme ',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Data link kontrol',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'HDLC, PPP',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Çoklu erişim yöntemleri',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'}
];
const courseContent2 = [
  {time: '5:35 mins',title: 'WEB Geliştirmeye Giriş',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'WEB Nasıl Çalışır?',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'HTML Giriş ',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'HTML Tablo ve Formlar',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'WEB Medya',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Gelişmiş CSS Layout',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'JavaScript-1 Dil Temelleri',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'JavaScript-2 JavaScript Kullanma',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'JavaScript-3 JavaScripti jQuery ile Genişletme',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'PHP ile Sunucu Tarafı Geliştirmeye Giriş',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'PHP Diziler ve Superglobals',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'PHP Sınıflar ve Nesneler',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
];
const courseContent3 = [
  {time: '5:35 mins',title: 'Temel Kavramlar ve Bilgisayar Evrimi',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Performans Sorunları',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Bilgisayar İşlevi ve Ara Bağlantının Üst Düzey Bir Görünümü ',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Ön Bellek',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins',title: 'Dahili Bellek',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Harici Bellek',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Input/Output',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'İşletim Sistemi Desteği',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins',title: 'Sayı Sistemi',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Bilgisayar Aritmetiği',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Dijital Mantık',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Komut Setleri: Karakteristik ve İşlev',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins',title: 'Komut Setleri: Adresleme Modları ve Formatları.',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'İşlemci Yapısı ve İşlemi',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Reduces Instruction Set Computers(RISC)',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Komut Düzeyinde Paralellik ve Superscalar İşlemciler',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Paralel İşleme',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Çok Çekirdekli Bilgisayarlar',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Genel Amaçlı Grafik İşlem Birimleri',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins',title: 'Kontrol Ünitesi Çalışması',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '7:35 mins', title: 'Mikroprogramlanmış Kontrol',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  
];
const courseContent4 = [
  {time: '5:35 mins',title: 'Nesne Tabanlı Programlamaya Giriş',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://www.youtube.com/watch?v=Y3ZLVPFLOjA&list=PLQoYY0GU_Tk9otubzE0rIQrP2NiiYVnEg&ab_channel=DataiTeam'},
  {time: '7:35 mins', title: 'Sınıflar',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '10:35 mins', title: 'Nitelikler',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
  {time: '5:35 mins', title: 'Metodlar',uri:'https://w3.gazi.edu.tr/~akcayol/files/DCL3DataSignals.pdf',videoUri:'https://youtu.be/TX5MN79varw'},
];

const courses = [
  {
    name: 'Veri İletişimi',
    totalCourse: '13',
    image: require('../assets/image2.png'),
    teacher: 'Bülent Gürsel EMİROĞLU',
    courseContent1,
    
  },
  {
    name: 'WEB Teknolojileri',
    totalCourse: '12',
    image: require('../assets/image3.png'),
    teacher: 'Bülent Gürsel EMİROĞLU',
    courseContent2,
   
  },
  {
    name: 'Bilgisayar Tasarımı ve Organizasyonu',
    totalCourse: '20',
    image: require('../assets/image1.png'),
    teacher: 'Bülent Gürsel EMİROĞLU',
    courseContent3,
    
  },
  {
    name: 'Nesne Yönelimli Programlama',
    totalCourse: '7',
    image: require('../assets/image4.png'),
    teacher: 'Bülent Gürsel EMİROĞLU',
    courseContent4,
    
  },
];

export default courses;
