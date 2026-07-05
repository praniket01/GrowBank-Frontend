import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
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

        <div className="relative">
          <Input
            type="text"
            className={cn(
              "pr-10",
              error && "border-red-500",
              className
            )}
            {...props}
          />
            {
                error && (
                    <p className="text-sm text-red-500">

                        {error}
                    </p>
                )
            }
            </div>
        </div>
    )
}