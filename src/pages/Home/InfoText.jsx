// src/components/InfoText.jsx
const InfoText = () => {
    return (
        <div className="bg-gray-100 py-16 px-6" id="InfoText">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Steps to Join</h1>
                <p className="text-lg mb-6">
                    Welcome everyone! As we organize and do our best to grow our Pickleball community here at Sunstone at Wellen Park, we are making sure we have access to platforms that other various clubs/communities have, so that we can share, grow, learn, and come together with the best virtual and physical experience possible. 
                </p>
                <h1 className="text-2xl mb-5">Join Sunstone Pickleball by doing the following: </h1>
                <p className="text-lg mb-8">
                    1.) Fill out the Sunstone Pickleball Club Signup Form: <span className="font-semibold text-blue-600"><a href="https://forms.gle/z7u7AxwRcnabhZch8" target="_blank">Click Here</a></span>
                </p>
                <p className="text-lg mb-8">
                    2.) Join the Facebook group: <span className="font-semibold text-blue-600"><a href="https://facebook.com/share/p/4KGQW4L2SJDKbN5R/?" target="_blank">Click Here</a></span>
                </p>
                
                {/* Buttons */}
                <h1 className="text-lg mb-4">3.) Join our mobile communications app to stay in the loop: </h1>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.teamreach.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Download TeamReach on Android
                    </a>
                    <a
                        href="https://apps.apple.com/us/app/teamreach-team-management/id1101253705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Download TeamReach on iPhone
                    </a>
                </div>
                <p className="text-lg pt-5">TeamReach Code: Sunstone123</p>
            </div>
        </div>
    );
};

export default InfoText;
