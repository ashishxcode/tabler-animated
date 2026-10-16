"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h2a2 2 0 1 0 0 -4h-2v8"}],["path",{"d":"M10 16v-6m2 -2a2 2 0 0 1 2 2m0 4v2"}],["path",{"d":"M10 13h3"}],["path",{"d":"M17 8h4"}],["path",{"d":"M19 8v7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[12,12],[11.5,13],[19,8],[19,11.5]]}];

export const HttpPatchOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpPatchOffIcon.displayName = "HttpPatchOffIcon";
