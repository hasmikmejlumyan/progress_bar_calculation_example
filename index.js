const progress = (badges) => {
    const progressPioneer = {
        width: (badges * 4) <= 100 ? `${badges * 4}%` : '100%',
        backgroundColor: (badges * 4) >= 0 ? 'rgba(108, 210, 255, 0.5)' : 'unset',
    }

    const progressNinja = {
        width: (badges * 4) <= 200 ? `${(badges * 4) - 100}%` : '100%',
        backgroundColor: (badges * 4) >= 100 ? 'rgba(108, 210, 255, 0.75)' : 'unset',
    }

    const progressTrailblazer = {
        width: (badges * 4) <= 300 ? `${(badges * 4) - 200}%` : '100%',
        backgroundColor: (badges * 4) >= 200 ? 'rgb(108, 210, 255)' : 'unset',
    }

    const progressElite = {
        width: (badges * 4) <= 400 ? `${(badges * 4) - 300}%` : '100%',
        backgroundColor: (badges * 4) >= 300 ? '#bceaff' : 'unset',
    }
};