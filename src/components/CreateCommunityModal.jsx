import React, { useState } from 'react';
import {
    FaTimes, FaUsers, FaGlobe, FaLock, FaCrown, FaCheckCircle,
    FaRocket, FaShieldAlt, FaComments
} from 'react-icons/fa';
import './CreateCommunityModal.css';

const CreateCommunityModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Setup, 2: Settings, 3: Success
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'General',
        accessType: 'free', // free, premium, vip, private
        isVisible: true,
        requireApproval: false,
        allowInvites: true,
        guidelines: 'Be respectful, stay on topic, and no spam.'
    });

    if (!isOpen) return null;

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);
    const handleSubmit = () => {
        // Mock API call simulation
        setTimeout(() => {
            setStep(3);
        }, 1000);
    };

    const getAccessIcon = (type) => {
        switch (type) {
            case 'premium': return <FaLock className="rc-icon" />;
            case 'vip': return <FaCrown className="rc-icon" />;
            case 'private': return <FaShieldAlt className="rc-icon" />;
            default: return <FaGlobe className="rc-icon" />;
        }
    };

    const PreviewCard = () => (
        <div className="preview-card">
            <div className="pc-icon">
                {getAccessIcon(formData.accessType)}
            </div>
            <span className={`pc-badge ${formData.accessType}`}>
                {formData.accessType === 'vip' ? 'VIP Only' :
                    formData.accessType === 'premium' ? 'Premium' :
                        formData.accessType === 'private' ? 'Private' : 'Free Open Access'}
            </span>
            <h3 className="pc-title">{formData.name || "Community Name"}</h3>
            <p className="pc-desc">{formData.description || "Short description of your community goals and topics will appear here."}</p>
            <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>
                <span><FaUsers /> 1 Member</span> • <span><FaComments /> New</span>
            </div>
        </div>
    );

    return (
        <div className="cc-modal-overlay">
            <div className="cc-modal">
                <div className="cc-header">
                    <h2>{step === 3 ? '🎉 Success!' : step === 1 ? 'Start a New Community' : 'Community Settings'}</h2>
                    <button className="cc-close" onClick={onClose}><FaTimes /></button>
                </div>

                {step < 3 ? (
                    <div className="cc-body">
                        {/* LEFT: Form */}
                        <div className="cc-form-section">
                            {step === 1 && (
                                <div className="fade-in">
                                    <h3 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>1. Basic Details</h3>

                                    <div className="form-group">
                                        <label>Community Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g. React Developers Club"
                                            value={formData.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Short Description</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="What is this community about?"
                                            value={formData.description}
                                            onChange={(e) => updateField('description', e.target.value)}
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Category</label>
                                        <select
                                            className="form-control"
                                            value={formData.category}
                                            onChange={(e) => updateField('category', e.target.value)}
                                        >
                                            <option value="General">General Discussion</option>
                                            <option value="Course">Course-Based</option>
                                            <option value="Skill">Skill Practice</option>
                                            <option value="Batch">Batch Specific</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Who can join? (Access Type)</label>
                                        <div className="radio-grid">
                                            {['free', 'premium', 'vip', 'private'].map(type => (
                                                <label key={type} className="radio-card-label">
                                                    <input
                                                        type="radio"
                                                        name="accessType"
                                                        value={type}
                                                        checked={formData.accessType === type}
                                                        onChange={(e) => updateField('accessType', e.target.value)}
                                                    />
                                                    <div className="radio-card">
                                                        {getAccessIcon(type)}
                                                        <span className="rc-title">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="fade-in">
                                    <h3 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>2. Rules & Configurations</h3>

                                    <div className="switch-row">
                                        <div className="switch-label">
                                            <h4>Visible in Directory</h4>
                                            <p>Show this community in the public "Discover" list.</p>
                                        </div>
                                        <label className="ui-switch">
                                            <input
                                                type="checkbox"
                                                checked={formData.isVisible}
                                                onChange={(e) => updateField('isVisible', e.target.checked)}
                                            />
                                            <span className="ui-slider"></span>
                                        </label>
                                    </div>

                                    <div className="switch-row">
                                        <div className="switch-label">
                                            <h4>Require Approval to Join</h4>
                                            <p>All new members must be approved by an admin.</p>
                                        </div>
                                        <label className="ui-switch">
                                            <input
                                                type="checkbox"
                                                checked={formData.requireApproval}
                                                onChange={(e) => updateField('requireApproval', e.target.checked)}
                                            />
                                            <span className="ui-slider"></span>
                                        </label>
                                    </div>

                                    <div className="switch-row">
                                        <div className="switch-label">
                                            <h4>Allow Member Invites</h4>
                                            <p>Members can invite their friends to join.</p>
                                        </div>
                                        <label className="ui-switch">
                                            <input
                                                type="checkbox"
                                                checked={formData.allowInvites}
                                                onChange={(e) => updateField('allowInvites', e.target.checked)}
                                            />
                                            <span className="ui-slider"></span>
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <label>Community Guidelines</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Set the rules for your community..."
                                            value={formData.guidelines}
                                            onChange={(e) => updateField('guidelines', e.target.value)}
                                            style={{ minHeight: '150px' }}
                                        ></textarea>
                                        <p className="helper-text">These will be pinned to the sidebar.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT: Preview */}
                        <div className="cc-preview-section">
                            <span className="preview-label">Live Preview</span>
                            <PreviewCard />
                        </div>
                    </div>
                ) : (
                    // SUCCESS STEP
                    <div className="cc-success fade-in">
                        <FaCheckCircle className="success-icon-animated" />
                        <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '1rem' }}>Community Created!</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>You have successfully launched <strong>{formData.name}</strong>.</p>

                        <div className="invite-box">
                            <FaGlobe style={{ color: '#94a3b8' }} />
                            <input readOnly value={`class360.com/c/${formData.name.toLowerCase().replace(/\s+/g, '-')}`} className="invite-link" />
                            <button className="copy-btn">Copy</button>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button className="btn-secondary lg" onClick={onClose}>Close</button>
                            <button className="btn-primary lg" onClick={onClose}>Go to Community <FaRocket /></button>
                        </div>
                    </div>
                )}

                {step < 3 && (
                    <div className="cc-footer">
                        {step > 1 && <button className="btn-secondary" onClick={handleBack}>Back</button>}
                        {step === 1 ? (
                            <button className="btn-primary" onClick={handleNext} disabled={!formData.name}>Next Step</button>
                        ) : (
                            <button className="btn-primary" onClick={handleSubmit}>Create Community</button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateCommunityModal;
