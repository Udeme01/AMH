import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Link2,
  ChevronRight,
  Mail,
  BookOpen,
  Heart,
  Bookmark,
} from "lucide-react";
import founder from "/assets/images/ade.jpg";
import { Link } from "react-router";

const BlogDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [emailSubscribe, setEmailSubscribe] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Sample blog post data
  const blogPost = {
    id: 1,
    title: "Building Empathetic Leadership in Crisis Situations",
    excerpt:
      "Learn how to maintain compassion and clear communication when leading through challenging times.",
    content: `
      <p>In today's rapidly changing world, leaders are constantly faced with unexpected challenges that test not only their decision-making abilities but also their capacity for empathy. The ability to lead with empathy during crisis situations has become one of the most crucial skills for modern leaders.</p> <br />

      <h2>Understanding Empathetic Leadership</h2><br />
      
      <p>Empathetic leadership goes beyond simply understanding your team's emotions. It involves actively listening, showing genuine concern, and making decisions that consider the human impact alongside business objectives. When crisis strikes, this approach becomes even more critical.</p><br />

      <blockquote>
        "Leadership is not about being in charge. It is about taking care of those in your charge." - Simon Sinek
      </blockquote><br />

      <h3>Key Principles of Crisis Leadership</h3><br/>

      <p>During times of uncertainty, leaders must balance multiple competing priorities while maintaining their team's trust and morale. Here are the fundamental principles that guide effective crisis leadership:</p><br />

      <p><strong>1. Transparent Communication</strong><br/>
      Keep your team informed about what's happening, what you know, and what you don't know. Transparency builds trust and reduces anxiety.</p><br />

      <p><strong>2. Active Listening</strong><br/>
      Create safe spaces for team members to express their concerns and ideas. Sometimes the best solutions come from unexpected sources.</p><br />

      <p><strong>3. Emotional Intelligence</strong><br/>
      Recognize and manage your own emotions while being attuned to the emotional needs of your team. This helps maintain stability during turbulent times.</p><br />

      <h2>Practical Strategies for Implementation</h2><br />

      <p>Implementing empathetic leadership during a crisis requires intentional action. Here are practical strategies you can use immediately:</p><br />

      <p>Start each team meeting by checking in on people's wellbeing before diving into business matters. This simple act shows that you value your team members as individuals, not just as resources.</p>

      <p>Create multiple communication channels to ensure everyone feels heard. This might include one-on-one meetings, anonymous feedback systems, or small group discussions.</p><br />

      <blockquote>
        "The greatest leader is not necessarily the one who does the greatest things. They are the one that gets the people to do the greatest things." - Ronald Reagan
      </blockquote><br />

      <h3>Building Long-term Resilience</h3><br />

      <p>While managing immediate crisis situations is important, building long-term resilience in your team and organization is equally crucial. This involves developing systems and practices that help your team bounce back stronger from future challenges.</p>

      <p>Invest in regular training and development opportunities that build both technical skills and emotional intelligence. Encourage continuous learning and adaptation as core values within your organization.</p><br />

      <p>Remember that empathetic leadership is not a destination but a continuous journey of growth and improvement. Each crisis presents new opportunities to deepen your understanding and strengthen your leadership capabilities.</p>
    `,
    author: "Mr. Daniel AdePeters",
    authorBio:
      "Leadership consultant and author of 'Compassionate Leadership in Modern Organizations'",
    authorImage: founder,
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Crisis Leadership",
    tags: [
      "Leadership",
      "Empathy",
      "Crisis Management",
      "Communication",
      "Team Building",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    likes: 127,
    shares: 45,
  };

  // Related posts data
  const relatedPosts = [
    {
      id: 2,
      title: "The Art of Active Listening in Leadership",
      excerpt:
        "Master the foundational skill that transforms good leaders into great ones.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2568&q=80",
      author: "Michael Chen",
      readTime: "6 min read",
      category: "Communication",
    },
    {
      id: 3,
      title: "Building Psychological Safety in Remote Teams",
      excerpt:
        "Create environments where team members feel safe to take risks and make mistakes.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      author: "Dr. Elena Rodriguez",
      readTime: "7 min read",
      category: "Team Building",
    },
    {
      id: 4,
      title: "Emotional Intelligence: The Leadership Superpower",
      excerpt: "Why EQ matters more than IQ in modern leadership roles.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      author: "James Patterson",
      readTime: "5 min read",
      category: "Psychology",
    },
  ];

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
    setShowShareMenu(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
    // You could add a toast notification here
  };

  const handleEmailSubscribe = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Subscribe email:", emailSubscribe);
    setEmailSubscribe("");
    // You could add a success message here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to=".."
            relative="path"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-8">
        {/* Article Header */}
        <header className="mb-8">
          {/* Category Badge */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {blogPost.category}
            </span>
            <div className="flex items-center space-x-2">
              {blogPost.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-size-xs text-gray-500 bg-gray-100 px-1 py-2 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {blogPost.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {blogPost.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-gray-700">
                  {blogPost.author}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Heart className="w-4 h-4" />
                <span>{blogPost.likes}</span>
              </div>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
                />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>

                {/* Share Dropdown */}
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                    <div className="p-2">
                      <button
                        onClick={() => handleShare("twitter")}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare("facebook")}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md"
                      >
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        <span className="text-sm">LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare("whatsapp")}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md"
                      >
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">WhatsApp</span>
                      </button>
                      <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md"
                      >
                        <Link2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Copy Link</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              lineHeight: "1.8",
            }}
          />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 border border-blue-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Enjoyed this post?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Subscribe for weekly insights on leadership, mediation, and
              personal growth.
            </p>

            <form
              onSubmit={handleEmailSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={emailSubscribe}
                onChange={(e) => setEmailSubscribe(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue hover:scale-95 text-white px-6 py-3 rounded-lg font-semibold transition duration-500 cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-12">
          <div className="flex items-start space-x-4">
            <img
              src={blogPost.authorImage}
              alt={blogPost.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {blogPost.author}
              </h4>
              <p className="text-gray-600 text-sm mb-3">{blogPost.authorBio}</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">Follow:</span>
                <a
                  href="#"
                  className="text-blue hover:text-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-blue hover:text-blue-700 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              You might also like
            </h2>
            <p className="text-gray-600">
              More insights on leadership and personal development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-gray-500">
                      by {post.author}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
