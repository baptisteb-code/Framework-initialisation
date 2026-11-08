import LienSocial from "./lien-social";

export default function PiedDePage() {
    return(
        <footer className="mt-10 border-t border-neutral-200 py-4 text-sm text-neutral-500">
            <div className="flex items-center justify-center gap-6">
                <p>Portfolio - Baptiste Broussolle - 2026</p>
                <LienSocial nom="GitHub" href="https://github.com/baptisteb-code" />
                <LienSocial nom="LinkedIn" href="https://www.linkedin.com/in/baptiste-broussolle-187674382/" />
            </div>
        </footer>
    )
}   