# DEPO TAKİP

Ostim ve Yenikent depoları için mobil uyumlu depo takip uygulaması.

## QR ile giriş / çıkış

- **Stok Yönetimi** sayfasındaki `QR` butonu ile her ürünün QR etiketini yazdırabilirsiniz.
- Üst bardaki `▣` butonu, Ana Panel'deki **QR ile İşlem** kartı veya Yeni İşlem sayfasındaki **QR Kod Tara** butonu kamerayı açar.
- Malzemenin QR etiketi okutulunca ürün otomatik bulunur; **Giriş, Makine Çıkışı, Vinç Çıkışı, Satış, Transfer veya İade** seçilir, miktar girilip işlem kaydedilir ve stok anında güncellenir.
- Kamera erişimi için tarayıcıdan izin vermeniz gerekir (HTTPS üzerinde çalışır, GitHub Pages uyumludur).

## Canlı uygulama

https://raplay96-oss.github.io/depo-takip-/

## Yönetici demo girişi

- Kullanıcı adı: `admin`
- Şifre: `Admin123!`

## Telefona kurulum

### iPhone

Safari ile canlı adresi açın: **Paylaş → Ana Ekrana Ekle → Ekle**.

### Android

Chrome ile canlı adresi açın: **Menü → Ana ekrana ekle / Uygulamayı yükle**.

> Bu aşamadaki sürüm PWA ve arayüz demosudur. Veriler her cihazın kendi tarayıcısında saklanır. 10 kullanıcının ortak stok kullanması için sonraki aşamada merkezi veritabanı ve sunucu kimlik doğrulaması bağlanacaktır.
