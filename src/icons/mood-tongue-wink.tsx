"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M10 14v2a2 2 0 0 0 4 0v-2"}],["path",{"d":"M15.5 14h-7"}],["path",{"d":"M17 10c-.5 -1 -2.5 -1 -3 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12,12],"a":-5},{"fx":"pop","n":[2,3,4,5],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[12,16],[12,14],[15.5,9.63]]}];

export const MoodTongueWinkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodTongueWinkIcon.displayName = "MoodTongueWinkIcon";
