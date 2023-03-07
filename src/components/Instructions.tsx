const Instructions = () => {
  return (
    <>
      <h1>How to play</h1>
      <p>The deck consists of 68 cards divided into the following types:</p>
      <ul>
        <li>Organs</li>
        <li>Viruses</li>
        <li>Medicines</li>
        <li>Treatments</li>
      </ul>
      <h2>Objective</h2>
      <p>Be the first player to complete your body. </p>
      <p>
        If you place 4 different healthy organs on the table in front of you,
        you win!
      </p>
      <p>
        Organs are considered healthy if they are free of viruses, vaccinated or
        immunized.
      </p>
      <p>Further on, we will explain how each card is used.</p>

      <h1>Game Mechanics</h1>
      <p>
        Each player must have 3 cards in their hand at the beginning of each
        turn and is allowed to take only one action per turn. After their turn,
        the player draws cards from the deck on the table to complete their hand
        of 3 cards.
      </p>
      <p>
        Play the different types of cards by placing them on the table in front
        of you to build your body, or on your opponents’ cards to stop them from
        completing their body before you.
      </p>
      <p>
        Some cards can make you discard or change your organs, vaccinations or
        even your hand. Develop your strategy to be the first one to form a
        complete body.
      </p>
      <p>
        Pay attention to other players’ moves because you must also prevent
        their attempts at completing their bodies before you.
      </p>
      <h1>Game Phases</h1>
      <p>
        Covatars is a dynamic game: choose between playing a card or discarding,
        then draw as many as you need to complete your hand (3 cards) and your
        turn is over. You cannot spend your turn without making a move.
      </p>
      <p>PHASE 1: Choose one of these two actions: PLAY or DISCARD</p>
      <p>PHASE 2: DRAW</p>
      <p>PHASE 3: PASS</p>
      <h1>Types of cards</h1>
      <h2>Organs</h2>
      <p>
        Gather 4 different healthy organs to win the game. You cannot have 2
        organs of the same type on your body at any time.
      </p>
      <p>
        Note: Your body can have 5 different organs if one of them is the
        multicolored organ. You will win if 4 of them are healthy.
      </p>
      <h2>Viruses</h2>
      <p>
        Use the virus cards to destroy your opponents’ organs and medicines. The
        viruses only have an effect on organs and medicines of the same color.
      </p>
      <h3>Infect</h3>
      <p>
        Place a virus card on a free organ of the same color to infect it. The
        infected organs are not considered healthy and, therefore, cannot be
        used to complete a body.
      </p>
      <h3>Remove</h3>
      <p>
        Destroy an infected organ. Place a second virus on an infected organ:
        that organ is now destroyed and all three cards must be placed on the
        discard pile.
      </p>
      <h3>Neutralize</h3>
      <p>
        Destroy a vaccine. Use a virus to eliminate a medicine of the same color
        that is placed on an organ. Place both the virus and the vaccine cards
        on the discard pile.
      </p>
      <h2>Medicines</h2>
      <p>
        Medicine cards are used to protect your organs from viruses. They can
        then be used to destroy viruses or to protect organs from being
        infected. Use medicine cards only on organs or viruses of the same
        color.
      </p>
      <h3>Cure</h3>
      <p>
        Destroy a virus. Use a medicine card to destroy a virus of the same
        color that is placed on an organ. Both cards are then placed on the
        discard pile.
      </p>
      <h3>Vaccinate</h3>
      <p>
        Protect an organ. Place a medicine on a free organ of the same color. To
        infect it, the medicine card will need to be eliminated first.
      </p>
      <h3>Immunize</h3>
      <p>
        Place a second medicine card on an organ. It will be protected forever
        against the attacks of any virus and it can no longer be destroyed or
        affected by treatment cards. Turn over the 2 medicine cards on top of
        the organ to show that it is now immune.{" "}
      </p>
      <h2>Treatments</h2>
      <p>
        Treatment cards can be game-changers that help you win. Use them to your
        advantage or to stop your opponents from completing their bodies before
        you complete yours. These cards are played into the discard pile and
        have an immediate effect.{" "}
      </p>
      <h3>Transplant</h3>
      <p>
        Swap an organ card between 2 players. It does not matter if these organs
        are different colors, or whether they are healthy, infected or
        vaccinated. Simply swap the chosen organ for another, unless either of
        the players ends up with two organs of the same color or the organ is
        immunized.
      </p>
      <h3>Organ thief</h3>
      <p>
        Steal an organ from another player’s body and place it on your own. You
        can steal healthy, vaccinated or infected organs, but not immunized
        ones. Remember that you cannot have 2 organs of the same color.
      </p>

      <h3>Contagion</h3>
      <p>
        Transfer as many viruses as you can from your infected organs to other
        players’ organs. You cannot play the virus card on vaccinated nor
        infected organs. You can only infect free organs.
      </p>

      <h3>Latex glove</h3>
      <p>
        All players, except the one playing the latex glove card, discard their
        hand. As they have no cards at the beginning of their next turn, these
        players must spend their turn as if they had chosen the DISCARD action
        on their turn, drawing a new hand, thus skipping a turn.
      </p>

      <h3>Medical error</h3>
      <p>
        Swap your entire body with another player, including organs, viruses and
        vaccines. The number of cards each player has on the table does not
        matter. When using this card, the immunized organs are exchanged, too.
      </p>
      <h2>Multicolored cards</h2>
      <p>
        There are 3 types of multicolored cards: organs, viruses and medicines.
        A multicolored card does not affect the color of a card it’s played on,
        and can be applied to all of them. This makes them very powerful, as
        they can affect cards of any color, yet also very fragile because they
        can be affected by any card.
      </p>
      <p>
        The multicolored organ can be immunized with two different types
        medicines, but it can also be destroyed by 2 viruses of different color.
      </p>
      <p>
        The multicolored virus can affect any organ or medicine, but it can also
        be cured by a medicine card of any color.
      </p>
      <p>
        The multicolored medicine can affect any virus or organ. However, it can
        also be destroyed by a virus of any color.
      </p>
    </>
  );
};

export default Instructions;
