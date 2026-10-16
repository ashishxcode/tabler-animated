"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21l8 0"}],["path",{"d":"M12 17l0 4"}],["path",{"d":"M7 4l10 0"}],["path",{"d":"M17 4v8a5 5 0 0 1 -10 0v-8"}],["path",{"d":"M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,10.5],"a":0.1},{"fx":"pop","n":[0,1,2,4,5],"o":[12,12.5],"a":0.3,"dl":0.12}];

export const TrophyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrophyIcon.displayName = "TrophyIcon";
