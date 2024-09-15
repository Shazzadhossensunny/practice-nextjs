
import Header2 from "../components/header2";
import "../../app/globals.css";

export default function AboutLayout({children}) {
  return (
    <div>
        <Header2></Header2>
        <div className="min-h-screen container mx-auto py-6">
         {children}
         </div>
    </div>
  )
}
