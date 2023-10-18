import { Card } from "@nextui-org/react"

export const PrincipalCard = () => {
  return (
    
    <div className="flex flex-row h-screen w-screen bg-black"> {/** BackPage */}
            <div className="flex flex-col space-y-2 w-screen mr-6 ml-6 mt-4 mb-4 p-2"> {/** Card BackPage */}
                <Card className="h-screen shadow-xl"> {/** Card */}
                </Card>
            </div>
    </div>
  )
}
