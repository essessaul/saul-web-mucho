import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Calendar, CheckCircle2, ClipboardList, CreditCard, Globe, Home, Link2, Search, Settings, ShieldCheck, UserCircle2, Users } from "lucide-react";
import { Badge, Button, Card } from "../components/ui";
import StatCard from "../components/StatCard";
import logo from "../assets/logo.png";
import { useRentalSearch } from "../context/RentalSearchContext";
import saulCartoon from "../assets/saul_cartoon.png";


export default function HomePage() {
  const navigate = useNavigate();
  const { search, setSearch } = useRentalSearch();

  function handleSearchChange(event) {
    const { name, value } = event.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  }

  function submitSearch() {
    navigate("/listings");
  }

  const modules = [
    [Search, "Vacation Rentals", "Short-term rental inventory focused entirely on Playa Escondida.", "/listings"],
    [CreditCard, "Direct Booking Flow", "Booking draft creation with payment-ready structure.", "/listings"],
    [Settings, "Admin Dashboard", "Manage reservations, availability, pricing, and reporting.", "/admin"],
    [UserCircle2, "Owner Services", "Show owners occupancy, revenue, and payout visibility.", "/owner-services"],
    [Link2, "For Sale", "A secondary section for units available for purchase.", "/for-sale"],
    [ClipboardList, "Operations", "Housekeeping, maintenance, and task tracking foundation.", "/admin"]
  ];

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="brand-banner">
              <img src={logo} alt="Playa Escondida Vacation Homes" />
            </div>
            <Badge>Short-term rentals at Playa Escondida</Badge>
            <h1 className="page-title">Find your Playa Escondida rental by dates and number of guests.</h1>
            <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760 }}>
              The main focus of this website is short-term rentals. All rental inventory is inside Playa Escondida, so guests only need to search by dates and guest count.
            </p>

            
<div className="card" style={{ marginTop: "1.5rem", padding: "1.25rem", background: "#ffffff", color: "#0f172a" }}>
              <div className="hero-search-grid">
                <div>
                  <div className="muted" style={{ marginBottom: ".4rem", fontSize: ".9rem" }}>Check-in</div>
                  <div style={{ position: "relative" }}>
                    <Calendar size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input type="date" name="checkIn" value={search.checkIn} onChange={handleSearchChange} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div>
                  <div className="muted" style={{ marginBottom: ".4rem", fontSize: ".9rem" }}>Check-out</div>
                  <div style={{ position: "relative" }}>
                    <Calendar size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input type="date" name="checkOut" value={search.checkOut} onChange={handleSearchChange} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div>
                  <div className="muted" style={{ marginBottom: ".4rem", fontSize: ".9rem" }}>Guests</div>
                  <div style={{ position: "relative" }}>
                    <Users size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input type="number" min="1" name="guests" value={search.guests} onChange={handleSearchChange} placeholder="Number of guests" style={{ paddingLeft: 40 }} />
                  </div>
                </div>
              </div>
              <div className="header-actions" style={{ marginTop: "1rem" }}>
                <Button onClick={submitSearch}>Search Rentals</Button>
                <span className="muted">Location: Playa Escondida Resort & Marina</span>
              </div>
            </div>

          </motion.div>

          <div>
            <Card>
              <div className="module-card">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
                  alt="Beachfront view"
                  style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "20px", marginBottom: "1rem" }}
                />
                <h3 style={{ marginTop: 0 }}>Playa Escondida rentals first</h3>
                <p className="muted" style={{ lineHeight: 1.7 }}>
                  Your homepage now leads with the rental search experience. The sales section stays available as a bonus, but the main marketing path is short-term stays.
                </p>
                <div className="notice" style={{ marginTop: "1rem" }}>
                  Optional next step: replace this landscape image with a real wide Playa Escondida photo and use your cartoon portrait in a smaller broker-support role.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stat-grid">
          <StatCard icon={Home} title="Rental Inventory" value="25+" note="All inside Playa Escondida" />
          <StatCard icon={BarChart3} title="Average Nightly Rate" value="$312" note="Portfolio level" />
          <StatCard icon={ShieldCheck} title="Occupancy" value="74%" note="Rolling 30 days" />
          <StatCard icon={Globe} title="Direct Booking Focus" value="Primary" note="Sales section is secondary" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 860, marginBottom: "1.5rem" }}>
            <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>Main Sections</div>
            <h2 style={{ fontSize: "2rem", margin: ".5rem 0 1rem" }}>Vacation Rentals first. For Sale and Owner Services as supporting sections.</h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              The homepage now brings rental traffic and booking leads first. Buyers and owners can still navigate to their dedicated sections.
            </p>
          </div>
          <div className="three-col" style={{ marginBottom: "2rem" }}>
            <Card>
              <div className="module-card">
                <h3>Vacation Rentals</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>Main marketing section with date and guest search for Playa Escondida stays.</p>
                <Link to="/listings"><Button variant="light">Open Section</Button></Link>
              </div>
            </Card>
            <Card>
              <div className="module-card">
                <h3>For Sale</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>Secondary section for ownership opportunities and real-estate inquiries.</p>
                <Link to="/for-sale"><Button variant="light">Open Section</Button></Link>
              </div>
            </Card>
            <Card>
              <div className="module-card">
                <h3>Owner Services</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>Owner-facing performance, statements, payouts, and support tools.</p>
                <Link to="/owner-services"><Button variant="light">Open Section</Button></Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container module-grid">
          {modules.map(([Icon, title, text, link]) => (
            <Card key={title}>
              <div className="module-card">
                <div className="brand-mark" style={{ width: 48, height: 48, borderRadius: 18 }}><Icon size={20} /></div>
                <h3 style={{ marginTop: 20 }}>{title}</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>{text}</p>
                <Link to={link}><Button variant="light">Open</Button></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
