const InfoText = () => {
    return (
        <div className="bg-gray-100 py-16 px-6" id="InfoText">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Steps to Join</h1>
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
                <p className="text-lg mb-8">
                    4.) Check the calendar for play times: <span className="font-semibold text-blue-600"><a href="/calendar" >Click Here</a></span>
                </p>
            </div>
        </div>
    );
};

export default InfoText;
