import React from 'react'

function SelectToJoinUs() {
  
   const [activeTab, setActiveTab] = useState('sign-up');
  return (
    <>
       <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('transaction')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'transaction'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Add Transaction
            </button>
            </div>
            </div>

    </>
  )
}

// export default SelectToJoinUs