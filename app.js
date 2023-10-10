import Userprofile from './component/userdetails'

const userdetailslist = [
    {
  unique_id="01"
  imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  name: 'tony',
  role: 'software',
}
{
  unique_id="02"
  imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  name: 'tony_2',
  role: 'software',

}
{
unique_id="03"
  imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  name: 'tony_2',
  role: 'software',
}


]

const App = () => 
<ul className="list-container">
    <div className="title">
        <h1>userslist</h1>
        <ul>
            {userdetailslist.map((eachitem)=>(<Userprofile userdetails={eachitem} key={eachitem.unique_id} />))
            }
        </ul>
    </div>
</ul>


export default App
