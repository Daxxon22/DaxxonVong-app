import * as React from "react";

class Title extends React.Component<{}> {

        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h2>NZ weather</h2>
                                <p>Find the current weather forecast for cities in NZ</p>
                        </div>
                );
        }
}

export default Title;