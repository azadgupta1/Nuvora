import prisma from '../config/prismaClient.js';  // Make sure you are importing Prisma client

// Offer a skill for exchange
export const offerSkill = async (req, res) => {
    const { skillOfferedId, skillWantedId } = req.body;
    const userId = req.user.userId;  // Assuming userId is available from the token

    try {
        const skillOffer = await prisma.skillExchange.create({
            data: {
                userId,
                skillOfferedId,
                skillWantedId,
                status: 'Pending',  // Initial status is Pending
            },
        });
        res.status(201).json({ message: 'Skill offered successfully!', skillOffer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong while offering skill.' });
    }
};

// Request a skill for exchange
export const requestSkill = async (req, res) => {
    const { skillOfferedId, skillWantedId } = req.body;
    const userId = req.user.userId;  // Assuming userId is available from the token

    try {
        const skillRequest = await prisma.skillExchange.create({
            data: {
                userId,
                skillOfferedId,
                skillWantedId,
                status: 'Pending',  // Initial status is Pending
            },
        });
        res.status(201).json({ message: 'Skill requested successfully!', skillRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong while requesting skill.' });
    }
};

// Get matched skills for the current user
export const getMatchedSkills = async (req, res) => {
    const userId = req.user.userId;  // Assuming userId is available from the token

    try {
        const matchedSkills = await prisma.skillExchange.findMany({
            where: {
                OR: [
                    { userId: userId, status: 'Pending' },
                    { skillWantedId: { in: (await prisma.skill.findMany({ where: { userId } })).map(skill => skill.id) }, status: 'Pending' },
                ],
            },
            include: {
                skillOffered: true,
                skillWanted: true,
            },
        });

        res.status(200).json(matchedSkills);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong while fetching matched skills.' });
    }
};

// Update the status of a skill exchange (e.g., Pending, Matched, Completed)
export const updateExchangeStatus = async (req, res) => {
    const { exchangeId, status } = req.body;  // Status can be 'Pending', 'Matched', 'Completed'
    const userId = req.user.userId;  // Assuming userId is available from the token

    try {
        const exchange = await prisma.skillExchange.findUnique({
            where: { id: exchangeId },
        });

        if (exchange.userId !== userId) {
            return res.status(403).json({ message: 'You can only update your own exchanges!' });
        }

        const updatedExchange = await prisma.skillExchange.update({
            where: { id: exchangeId },
            data: { status },
        });

        res.status(200).json({ message: 'Exchange status updated successfully!', updatedExchange });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong while updating exchange status.' });
    }
};
