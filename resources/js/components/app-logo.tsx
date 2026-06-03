import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center bg-transparent">
                <img src="/Logo.png" alt="Rewind Nature Logo" className="h-full w-full object-contain" />
            </div>
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-bold text-emerald-950 dark:text-emerald-50">
                    Rewind Nature
                </span>
            </div>
        </>
    );
}
