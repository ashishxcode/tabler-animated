"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M12 3v4"}],["path",{"d":"M12 17v4"}],["path",{"d":"M3 12h4"}],["path",{"d":"M17 12h4"}],["path",{"d":"M18.364 5.636l-2.828 2.828"}],["path",{"d":"M8.464 15.536l-2.828 2.828"}],["path",{"d":"M5.636 5.636l2.828 2.828"}],["path",{"d":"M15.536 15.536l2.828 2.828"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[12,5],[12,19],[5,12],[19,12],[16.95,7.05],[7.05,16.95],[7.05,7.05],[16.95,16.95]]}];

export const PokerChipIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PokerChipIcon.displayName = "PokerChipIcon";
