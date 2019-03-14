import React from 'react';

const Header = (props) => (
            <>
            <header className="top">
                <h1>
                    Catch 
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                    </h1>
            </header>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
            </>
    );



// class Header extends React.Component {
//     render () {
//         return (
//             <>
//             <header className="top">
//                 <h1>
//                     Catch 
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The</span>
//                     </span>
//                     Day
//                     </h1>
//             </header>
//             <h3 className="tagline">
//                 <span>{this.props.tagline}</span>
//             </h3>
//             </>
//         )
//     }
// }

export default Header;