export default function Desc()
{
    return (
    <div className="flex flex-col ml-36 gap-y-4">
    <div> <h3>Product Details</h3></div>
    <hr className="text-gray-400"></hr>
    <div className="w-[800px]"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
    <div>
        <table >
            <tr>
            <td className="border border-black w-[100px] text-center ">Color</td>
            <td className="border border-black w-[700px] font-bold" >Blank,Brown,Red</td>
            </tr>
            <tr>
            <td className="border border-black w-[100px] text-center">Material</td>
            <td className="border border-black w-[700px] font-bold" >Latex</td>
            </tr>
            <tr>
            <td className="border border-black w-[100px] text-center">Weight</td>
            <td className="border border-black w-[700px] font-bold" >55kg</td>
            </tr>
        </table>
    </div>

    </div>
    )
}