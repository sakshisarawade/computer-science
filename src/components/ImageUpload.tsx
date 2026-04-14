import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Image as ImageIcon, X, Sparkles } from 'lucide-react';

interface ImageUploadProps {
  onUpload: (file: File) => void;
  isAnalyzing: boolean;
}

export default function ImageUpload({ onUpload, isAnalyzing }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onUpload(file);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full">
      <motion.div
        layout
        className={`bg-white border-2 border-dashed rounded-xl p-8 text-center transition-colors flex flex-col justify-center items-center min-h-[300px] ${
          isDragging ? 'border-heritage-gold bg-heritage-gold/5' : 'border-heritage-sandstone'
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
      >
        <AnimatePresence mode="wait">
          {!preview ? (
            <motion.div
              key="upload-prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-heritage-beige rounded-lg flex items-center justify-center mb-4 text-heritage-sandstone">
                <Upload size={24} />
              </div>
              <p className="text-sm font-bold text-heritage-terracotta mb-4">Upload Monument Image</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="heritage-button"
                disabled={isAnalyzing}
              >
                Select Photo
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <div className="relative w-full h-[180px] bg-[#fdfcf8] border border-heritage-beige rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover opacity-90"
                />
                {!isAnalyzing && (
                  <button
                    onClick={clearImage}
                    className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                )}
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="mb-2 text-heritage-gold"
                    >
                      <Sparkles size={32} />
                    </motion.div>
                    <p className="text-[10px] font-bold tracking-widest uppercase">Analyzing...</p>
                  </div>
                )}
              </div>
              {!isAnalyzing && (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[13px] font-bold text-heritage-terracotta">Identification Successful</p>
                  <button
                    onClick={() => onUpload(new File([], ''))} 
                    className="heritage-button"
                  >
                    Re-Identify
                  </button>
                </div>
              )}
              {isAnalyzing && (
                <div className="flex items-center gap-2 text-xs text-heritage-gold font-bold">
                  <span className="w-2 h-2 bg-heritage-gold rounded-full animate-pulse"></span>
                  AI Analysis in Progress
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileChange}
          accept="image/*"
          className="hidden"
        />
      </motion.div>
    </div>
  );
}
