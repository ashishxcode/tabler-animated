"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16v-8"}],["path",{"d":"M7 8v8"}],["path",{"d":"M3 12h4"}],["path",{"d":"M14 8h-2m-2 2v6h4"}],["path",{"d":"M10 12h2"}],["path",{"d":"M17 13v-3a2 2 0 1 1 4 0v6"}],["path",{"d":"M17 13h4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6],"o":[19,13],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,12],[7,12],[5,12],[12,12],[11,12],[19,12]]}];

export const HttpHeadOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpHeadOffIcon.displayName = "HttpHeadOffIcon";
