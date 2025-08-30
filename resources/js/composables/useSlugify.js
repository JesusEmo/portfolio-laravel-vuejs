// texto a enlace para casos como la Navbar
export function slugify(txt) {
  return txt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}