"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}],["path",{"d":"M15 14c-2 0 -3 1 -3.5 2.05"}],["path",{"d":"M9 10h-.01"}],["path",{"d":"M15 10h-.01"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[13.25,15.03],[9,10],[15,10]]}];

export const MoodAnnoyedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodAnnoyedIcon.displayName = "MoodAnnoyedIcon";
