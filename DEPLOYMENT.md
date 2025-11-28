# 🚀 Deployment Guide - Render.com

## Complete Step-by-Step Deployment Instructions

---

## 📋 Prerequisites

✅ GitHub repository created: `https://github.com/Parthipan868/AI-House-Price-Predictor`
✅ Code pushed to GitHub
✅ Render account (free)

---

## 🌐 Deployment Steps

### **Step 1: Sign In to Render**

1. Go to: **https://dashboard.render.com/**
2. Click **"Sign In with GitHub"**
3. Authorize Render to access your GitHub repositories
4. You'll be redirected to your Render Dashboard

---

### **Step 2: Create New Web Service**

1. Click **"New +"** button (top right corner)
2. Select **"Web Service"** from the dropdown menu
3. You'll see a list of your GitHub repositories

---

### **Step 3: Connect Repository**

1. Find **`AI-House-Price-Predictor`** in the repository list
2. Click **"Connect"** button next to it
3. If you don't see the repository:
   - Click **"Configure account"** 
   - Grant Render access to the repository
   - Return to Step 2

---

### **Step 4: Configure Web Service**

Fill in the following configuration:

#### Basic Settings:

| Field | Value |
|-------|-------|
| **Name** | `ai-house-price-predictor` |
| **Region** | `Singapore` (or closest to you) |
| **Branch** | `main` |
| **Root Directory** | *Leave blank* |

#### Build Settings:

| Field | Value |
|-------|-------|
| **Runtime** | `Python 3` |
| **Build Command** | *Leave blank* (Render auto-detects from requirements.txt) |
| **Start Command** | `uvicorn main:app --host=0.0.0.0 --port=10000` |

#### Instance Type:

| Field | Value |
|-------|-------|
| **Instance Type** | **Free** |

---

### **Step 5: Deploy**

1. Review all settings
2. Scroll down and click **"Create Web Service"**
3. Render will start the deployment process

---

### **Step 6: Monitor Deployment**

You'll see a build log with:
- Installing dependencies from `requirements.txt`
- Starting the server
- Deployment status

**Typical deployment time:** 2-5 minutes

---

### **Step 7: Access Your Live App**

Once deployment is complete:

1. **Status** will show: `Live` ✅
2. You'll get a **Public URL** like: `https://ai-house-price-predictor.onrender.com`
3. Click the URL or copy it to test your app!

---

## 🧪 Test Your Deployed App

### Test the UI:
```
https://your-app-name.onrender.com/
```

### Test the API:
```
https://your-app-name.onrender.com/docs
```

### Make a Prediction (via API):
```bash
curl -X POST "https://your-app-name.onrender.com/predict" \
  -H "Content-Type: application/json" \
  -d '{"data": [8.3252, 41.0, 6.98, 1.02, 322, 2.55, 37.88, -122.23]}'
```

---

## ⚠️ Important Notes

### Free Tier Limitations:

- 🕐 **Spin Down:** Apps automatically spin down after 15 minutes of inactivity
- ⏱️ **Cold Start:** First request after sleep takes ~30-45 seconds
- 💰 **Hours:** 750 free hours per month (enough for continuous use)
- 💾 **Build Time:** Max 10 minutes build time

### Performance Tips:

- First load might be slow (cold start)
- Subsequent requests are fast
- Consider upgrading to paid tier for 24/7 uptime

---

## 🔧 Troubleshooting

### Common Issues:

**Issue 1: Build Failed**
- Check that `requirements.txt` is in root directory
- Verify all dependencies are listed
- Check build logs for specific errors

**Issue 2: App Won't Start**
- Verify Start Command: `uvicorn main:app --host=0.0.0.0 --port=10000`
- Check that `main.py` exists in root directory
- Review deployment logs

**Issue 3: 404 Not Found**
- Ensure `static` folder is committed to GitHub
- Verify file paths in `main.py`
- Check branch is `main`

**Issue 4: Model Not Loading**
- Ensure `house_model.pkl` is committed to GitHub
- Check file size (should be ~681 bytes)
- Verify joblib version compatibility

---

## 📱 Share Your App

Once deployed, share your app URL:

```
🏠 AI House Price Predictor
🔗 https://your-app-name.onrender.com
```

**Built with:**
- FastAPI
- Machine Learning (sklearn)
- Beautiful Modern UI
- Deployed on Render

---

## 🔄 Update Your Deployed App

Whenever you push changes to GitHub:

1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. Render automatically detects changes and re-deploys!

---

## 📊 Deployment Checklist

- [ ] Signed in to Render with GitHub
- [ ] Clicked "New +" → "Web Service"
- [ ] Connected `AI-House-Price-Predictor` repository
- [ ] Set Name: `ai-house-price-predictor`
- [ ] Set Runtime: `Python 3`
- [ ] Set Start Command: `uvicorn main:app --host=0.0.0.0 --port=10000`
- [ ] Selected **Free** instance type
- [ ] Clicked "Create Web Service"
- [ ] Waited for deployment to complete
- [ ] Tested the live URL
- [ ] Shared the app! 🎉

---

## 🎯 Expected Result

Your app will be live at: `https://ai-house-price-predictor.onrender.com`

Users can:
- ✅ Enter house features in the beautiful UI
- ✅ Get instant price predictions in Indian Rupees
- ✅ See smooth animations and transitions
- ✅ Access API documentation at `/docs`
- ✅ Use the API programmatically

---

**Good luck with your deployment! 🚀**

---

*Created: 2025-11-28*
*Author: PARTHIPAN M*
*Project: AI House Price Predictor*
