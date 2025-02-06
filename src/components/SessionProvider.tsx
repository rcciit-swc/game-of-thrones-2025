"use client";
import { useUser } from '@/lib/stores/user';
import { useEffect } from 'react';

const SessionProvider = () => {
    const setUser = useUser((state) => state.setUserData);

    useEffect(() => {
        setUser();
    }, [setUser]);

    return null;
};

export default SessionProvider;
