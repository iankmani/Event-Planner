import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const CreateNewEvent = async (req, res) => {
  const { title, imageUrl, description, location, dateTime } = req.body;
  try {
    const newEvent = await prisma.event.create({
      data: {
        title: title,
        imageUrl: imageUrl,
        description: description,
        location: location,
        dateTime: dateTime,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "Created Event Successfully", newEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const GetAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json({
      success: true,
      message: "All Events are Successfully Listed Below",
      events,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching events" });
  }
};

export const DeleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await prisma.event.delete({
      where: { id: id },
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Event Deleted Successfully",
        deletedEvent,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
