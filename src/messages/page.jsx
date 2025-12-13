
import React from 'react';
import Layout from './layout';
import ConversationList from './ConversationList';
import MessagePanel from './MessagePanel';
import ContactSidebar from './ContactSidebar';

export default function MessagesPage() {
  return (
    <Layout>
      <ConversationList />
      <MessagePanel />
      <ContactSidebar />
    </Layout>
  );
}
