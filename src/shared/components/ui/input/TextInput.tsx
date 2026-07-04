import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLElement>{
    label : string,
    error?: string,

}

export default function TextInput({
    label,
    error,
    className,
    ...props
}: TextInputProps){
    return(
        <div className="space-y-2">
            <label className="text-sm font-medium">
            {label}
            </label>
            
            <input className={cn(error && "border-red-500", className)} />
            {
                error && (
                    <p className="text-sm text-red-500">

                        {error}
                    </p>
                )
            }
        </div>
    )
}