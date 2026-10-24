const menu=document.querySelector("#menu"),nav=document.querySelector("#nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));document.querySelector("#year").textContent=new Date().getFullYear();
// Setelah portal berita dan PPDB dibuat, masukkan URL publik pada variabel di bawah.
const NEWS_URL=""; const PPDB_URL="";
document.querySelector("#ppdbLink").addEventListener("click",e=>{if(!PPDB_URL){e.preventDefault();alert("Tautan PPDB belum diatur. Isi PPDB_URL pada script.js setelah halaman PPDB dipublikasikan.");}else e.currentTarget.href=PPDB_URL;});
