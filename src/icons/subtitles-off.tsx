"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.13 .874m-2.006 2a3 3 0 0 1 -.864 .126h-12a3 3 0 0 1 -3 -3v-8c0 -1.35 .893 -2.493 2.12 -2.869"}],["path",{"d":"M7 15h5"}],["path",{"d":"M17 12h-1"}],["path",{"d":"M12 12h-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,15],[16.5,12],[11,12]]}];

export const SubtitlesOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SubtitlesOffIcon.displayName = "SubtitlesOffIcon";
