import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';
import './lib/dayjs'
import { api } from './server/axios';

navigator.serviceWorker.register('service-works.js')
.then(async serviceWork => {
  let subscription = await serviceWork.pushManager.getSubscription()

  if(!subscription) {
    const publicKeyResponse = await api.get('/push/public_key')

    subscription = await serviceWork.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKeyResponse.data.publicKey
    })
  }

  await api.post('/push/register', {
    subscription
  })

  await api.post('/push/send', {
    subscription
  })
})

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">

        <Header />
        <SummaryTable />

      </div>
    </div>
  )
}
