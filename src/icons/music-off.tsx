"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14.42 14.45a3 3 0 1 0 4.138 4.119"}],["path",{"d":"M9 17v-8m0 -4v-1h10v11"}],["path",{"d":"M12 8h7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[15.78,17.22],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,2,3],"o":[11,12],"d":[0,-2]}];

export const MusicOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MusicOffIcon.displayName = "MusicOffIcon";
