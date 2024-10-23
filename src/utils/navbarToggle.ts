export const toggleNavbar = (e: any) => {
    const navbar = document.querySelector("nav")

    if (navbar && e.currentTarget) {
        navbar.classList.toggle("appeared")
        e.currentTarget.classList.toggle("active")
    }
}