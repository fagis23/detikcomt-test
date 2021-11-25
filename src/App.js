import logo from './logo.svg';
import backgroundleft from './assets/background/backgroundleft.svg'
import backgroundright from './assets/background/backgroundright.svg'
import detikpoint from './assets/icons/depoin.svg'
import gold from './assets/icons/gold.svg'
import './App.css';
import { useState } from 'react';


const App = () => {
  const [hoverCara, setHoverCara] = useState(false)
  const [hoverVoucher, setHoverVoucher] = useState(false)
  const [hoverSyarat, setHoverSyarat] = useState(false)
  const [hoverBeli, setHoverBeli] = useState(false)
  const [count, setCount] = useState(9999);
  const data = [{
    title: 'Peserta memiliki akun detikID dengan nomor telepon yang terverifikasi dan dapat dihubungi,'
  }, {
    title: "Peserta memastikan bahwa nomor telepon yang tertera pada data pengiriman di detikpoin sama dengan yang"
  }, {
    title: 'tertera pada akun detikID,'
  },
  {
    title: "Peserta memiliki poin yang dikumpulkan dari beragam aktivitas berpoin yang tersedia dalam kurun waktu </br> Februari-Desember 2020,"
  }, {
    title: 'Peserta melakukan redeem voucher undian Lucky Click detikpoin 2020 dilakukan dalam 3 periode yaitu bulan'
  }, {
    title: 'April 2020,Agustus 2020, dan Desember 2020,'
  }
    , {
    title: 'Peserta memiliki kode voucher undian yang didapatkan dari hasil penukaran (redeem) 10 poin yang dimiliki di detikpoin,'
  }, {
    title: 'Satu user detik ID dapat me-redeem lebih dari 1 voucher undian,'
  }, {
    title: 'Satu transaksi redeem poin dapat ditukar dengan maksimal 5 voucher undian. Jumlah transaksi yang dapat dilakukan oleh peserta tidak dibatasi. Jika Anda ingin memiliki voucher undian lebih dari 5, Anda bisa melakukan transaksi redeem poin kembali,'
  }, {
    title: 'Masa berlaku Voucher undian yang telah ditukar melalui redeem hanya dapat digunakan pada 1 periode program, Pada saat pengundian berlangsung, mohon pastikan kembali bahwa nomor telepon yang tertera pada akun'
  }, {
    title: "detikID maupun yang tertera pada data pengiriman di detikpoin sama, aktif, dan dapat dihubungi. Apabila saat"
  }, {
    title: 'pengundian berlangsung nomor telepon kandidat pemenang tidak dapat dihubungi (tidak menjawab atau tidak'
  }, {
    title: "aktif), maka kesempatan tersebut akan hangus dan akan digantikan dengan kandidat lainnya,"
  }, {
    title: 'Pemenang tidak dapat memilih ukuran, jumlah, warna, bentuk, model, maupun tipe dari hadiah yang diberikan.</br> Hal tersebut disesuaikan dengan kondisi stok hadiah yang tersedia,'
  }, {
    title: "Pajak setiap grand prize akan ditanggung oleh pemenang,</br> Seluruh hadiah tidak dapat digantikan dengan uang,baik sebagian maupun seluruhnya ataupun dipindahtangankan,"
  }, {
    title: 'Program Lucky Click detikpoin tidak berlaku untuk karyawan detikNetwork ataupun keluarga inti karyawan, detikNetwork tidak bertanggung jawab atas setiap kehilangan atau kerugian apapun yang timbul sehubungan dengan keikutsertaan peserta dalam Program Lucky Click detikpoin,</br> detikNetwork berhak melakukan tindakan yang diperlukan apabila diduga terjadi tindakan kecurangan dari </br> peserta yang melanggar syarat dan ketentuan atau merugikan detikNetwork,</br> Syarat dan ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.'
  }]


  return (
    <div className="container">
      <div className="container__background">
        <div className="container__background__left">
          <img alt="asd" src={backgroundleft} />
        </div>
        <div className="container__background__right">
          <img alt="asd" src={backgroundright} />
        </div>
      </div>
      <div className="header__container">
        <div className="header__mobile__flex">
          <div className="header__mobile__flex__hamburger__line"></div>
          <div className="header__mobile__flex__hamburger__line"></div>
          <div className="header__mobile__flex__hamburger__line"></div>
        </div>
        <div className="header__container__title">
          <div className="header__container__detik">
            <img alt='asd' src={detikpoint} />
          </div>
        </div>
        <div className="header__container__items">
          <div className="header__container__cara" onMouseEnter={() => setHoverCara(true)} onMouseLeave={() => setHoverCara(false)}>
            <div className="header__container__cara__text">
              <span>CARA IKUTAN</span>
            </div>
            <div className="header__container__cara__underline">
              <span style={hoverCara === true ? { borderBottom: "1px solid  #FFC633", width: 25 } : {}}></span>
            </div>
          </div>
          <div className="header__container__voucher" onMouseEnter={() => setHoverVoucher(true)} onMouseLeave={() => setHoverVoucher(false)}>
            <div className="header__container__voucher__text">
              <span>VOUCHER SAYA</span>
            </div>
            <div className="header__container__voucher__underline">
              <span style={hoverVoucher === true ? { borderBottom: "1px solid  #FFC633", width: 25 } : {}}></span>
            </div>
          </div>
          <div className="header__container__syarat" onMouseEnter={() => setHoverSyarat(true)} onMouseLeave={() => setHoverSyarat(false)}>
            <div className="header__container__syarat__text">
              <span>SYARAT & KETENTUAN</span>
            </div>
            <div className="header__container__syarat__underline">
              <span style={hoverSyarat === true ? { borderBottom: "1px solid  #FFC633", width: 25 } : {}}></span>
            </div>
          </div>
          <div className="header__container__beli" onMouseEnter={() => setHoverBeli(true)} onMouseLeave={() => setHoverBeli(false)}>
            <div className="header__container__beli__text">
              <span>BELI VOUCHER</span>
            </div>
            <div className='header__container__beli__underline'>
              <span style={hoverBeli === true ? { borderBottom: "1px solid  #FFC633", width: 25 } : {}}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body__top">
          <div className="body__top__left">
            <div className="body__top__left__container">
              <div className='body__top__left__container__title'>
                <span>Lucky Click detikpoin</span>
              </div>
              <div className="body__top__left__container__desc">
                <span>Kumpulkan poin Anda dan tukarkan dengan voucher undian Lucky Click detikpoin dan menangkan Grandprize Emas 25 gr pada periode April 2020, tabungan senilai 25 juta pada periode Agustus 2020, dan Mobil pada periode Desember 2020.</span>
              </div>
              <div className="body__top__left__container__button">
                <div className="body__top__left__container__button__text">
                  <span>Redeem Voucher Undian</span>
                </div>
              </div>
            </div>
          </div>
          <div className='body__top__right'>
            <div className="body__top__right__img">
              <img alt="asd" src={gold} />
              <div className="body__top__right__shadow"></div>
            </div>

          </div>
        </div>
        <div className="body__bot">
          <div className="body__bot__box">
            <div className="body__bot__box__wrap">
              <div className="body__bot__box__wrap__title">
                <span>BATAS PENUKARAN POIN BERAKHIR PADA</span>
              </div>
              <div className="body__bot__box__wrap__date">
                <span>31 April 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body2">
        <div className="body2__title">
          <span>Cara Ikutan Lucky Click detikpoin</span>
        </div>
        <div className="body2__step">
          <div className="body2__step__first">
            <div className="body2__step__first__box">
              <div className="body2__step__first__box__number">
                <span>1.</span>
              </div>
              <div className="body2__step__first__box__box">
                <div className="body2__step__first__box__box__title">
                  <span>Memiliki Akun detikID</span>
                </div>
                <div className="body2__step__first__box__box__desc">
                  <span>Pastikan nomor telepon Anda telah terverifikasi dan dapat dihubungi. Informasi cara verifikasi nomor telepon..
                  </span>
                  <div>
                    <span className="klik">klik disini</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="body2__step__first">
            <div className="body2__step__first__box">
              <div className="body2__step__first__box__number">
                <span>2.</span>
              </div>
              <div className="body2__step__first__box__box">
                <div className="body2__step__first__box__box__title">
                  <span>Memiliki Poin</span>
                </div>
                <div className="body2__step__first__box__box__desc">
                  <span>Pastikan jumlah poin Anda cukup, untuk mengumpulkan poin.. <span className="klik">klik disini</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="body2__step__first">
            <div className="body2__step__first__box">
              <div className="body2__step__first__box__number">
                <span>3.</span>
              </div>
              <div className="body2__step__first__box__box">
                <div className="body2__step__first__box__box__title">
                  <span>Melakukan Redeem Voucher Undian</span>
                </div>
                <div className="body2__step__first__box__box__desc">
                  <span>Anda akan mendapatkan kode voucher di menu voucher saya.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="body2__step__first">
            <div className="body2__step__first__box">
              <div className="body2__step__first__box__number">
                <span>4.</span>
              </div>
              <div className="body2__step__first__box__box">
                <div className="body2__step__first__box__box__title">
                  <span>Menunggu Pengundian Berlangsung</span>
                </div>
                <div className="body2__step__first__box__box__desc">
                  <span>Anda bisa mengikuti update informasi di detikcom.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body3">
        <div className="body3__title">
          <span>Redeem Voucher Undian Lucky Click detikpoin</span>
        </div>
        <div className="body3__box">
          <div className="body3__box__warning">
            <span>*Lucky Click ini mengharuskan Anda memasukkan no telp di detikID</span>
          </div>
        </div>
        <div className="body3__point">
          <div className="body3__point__left">
            <div className="body3__point__left__name">
              <span>Hello, <span className="name">Dimas!</span></span>
            </div>
            <div className='body3__point__left__circle'>
              <div className="body3__point__left__circle__box">
                <div className="body3__point__left__circle__box__text">
                  <span>Poin Anda</span>
                </div>
                <div className="body3__point__left__circle__box__point">
                  <span>{count}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="body3__point__right">
            <div className="body3__point__right__box">
              <div className="body3__point__right__box__text">
                <span>
                  Masukkan nominal untuk redeem voucher
                </span>
              </div>
              <div className="body3__point__right__box__count">
                <div className="body3__point__right__box__count__minus" onClick={() => setCount(count - 1)}>
                  <div>
                    <span>-</span>
                  </div>
                </div>
                <div className="body3__point__right__box__count__input">
                  <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
                </div>
                <div className="body3__point__right__box__count__add" onClick={() => setCount(count + 1)}>
                  <div>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className="body3__point__right__box__button">
                <span>Redeem Voucher (20 poin)</span>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="body4">
        <div className="body4__title">
          <span>Voucher Undian Lucky Click detikpoin Saya</span>
        </div>
        <div className="body4__items">
          <div className="body4__items__grid">
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
            <div className="body4__items__grid__item">
              <span>GD10923</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body5">
        <div className="body5__title">
          <span>Syarat dan Ketentuan Pemenang</span>
        </div>
        <div className="body5__box">
          <div className="body5__box__box">
            {data.map((item, key) => {
              return (
                <div className="body5__box__line" key={key}>
                  <div className="body5__box__line__number">
                    <span>{key + 1}.</span>
                  </div>
                  <div className="body5__box__line__text" dangerouslySetInnerHTML={{
                    __html: item.title
                  }}>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__box">
          <div className="footer__box__flex">
            <div className="footer__box__flex__1">
              <div className="footer__box__flex__1__title">
                <span className="footer__box__flex__1__title__detik">detik</span><span className="footer__box__flex__1__title__poin">Poin</span>
              </div>
              <div className="footer__box__flex__1__choice">
                <span>Customer Service</span>
              </div>
              <div className="footer__box__flex__1__choice">
                <span>Gedung TransMedia Lantai 8</span>
              </div>
              <div className="footer__box__flex__1__choice">
                <span>Jl. Kapten P.Tendean Kav. 12-14 A Jakarta 12790</span>
              </div>
              <div className="footer__box__flex__1__choice">
                <span>Email: info@detik.com</span>
              </div>
            </div>
            <div className="footer__box__flex__2">
              <div className="footer__box__flex__2__title">
                <span>Perusahaan</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>Tentang detikPoin</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>Info Iklan</span>
              </div>
            </div>
            <div className="footer__box__flex__3">
              <div className="footer__box__flex__2__title">
                <span>Bantuan</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>Cara Redeem</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>FAQ detikPoin</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>Syarat dan Ketentuan</span>
              </div>
            </div>
            <div className="footer__box__flex__4">
              <div className="footer__box__flex__2__title">
                <span>Lainnya</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>Produk Tukar Poin</span>
              </div>
              <div className="footer__box__flex__3__choice">
                <span>Cari Poin detikNetwork</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright &copy; 2018 detikPoin, All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default App;
