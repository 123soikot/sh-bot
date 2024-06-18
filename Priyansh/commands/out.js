module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "out box",
  commandCategory: "Admin",
  usages: "out [tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const tid = args.join(" ")
   let namee = await api.getThreadInfo(tid)
  if (!tid) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);

else return api.removeUserFromGroup(api.getCurrentUserID(), tid, () => api.sendMessage("love you all,আসসালামু আলাইকুম🥰 আপনাদের সবার সাথে অনেক মজা করলাম যদি কোন ভুল হয়ে থাকে মাফ করে দিবেন😍🥰 বস  এর আদেশ আমি আর এখন কথা বলতে পারবো না😥 আপনাদের সাথে আমার আবার কথা হবে যখন আমার স্যার Ex 卝 বয়ফ্রেন্ডヅ SIR অনুমতি দিবে😍 তাই এখন এর জন্য বিদায়💔!!!", ", event.threadID, event.messageID));

}
