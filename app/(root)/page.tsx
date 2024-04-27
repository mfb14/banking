import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import { type ClassValue } from 'clsx';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type ="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45}
          />
        </header>
        RECENT TRANSACTIONS 
      </div>
      <RightSidear 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1234.544},{currentBalance:4343.456}]}
      />
    </section>
  )
}

export default Home