"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5h2"}],["path",{"d":"M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8"}],["path",{"d":"M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2"}],["path",{"d":"M12 18v2"}],["path",{"d":"M10 11v.01"}],["path",{"d":"M14 11v.01"}],["path",{"d":"M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815"}],["path",{"d":"M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,16],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,16.5],[12,19],[10,11.01],[14,11.01],[7,8],[17,8]]}];

export const DogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DogIcon.displayName = "DogIcon";
