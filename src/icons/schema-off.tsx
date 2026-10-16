"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 2h4v4m-4 0h-1v-1"}],["path",{"d":"M15 11v-1h5v4h-2"}],["path",{"d":"M5 18h5v4h-5l0 -4"}],["path",{"d":"M5 10h5v4h-5l0 -4"}],["path",{"d":"M10 12h2"}],["path",{"d":"M7.5 7.5v2.5"}],["path",{"d":"M7.5 14v4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.5,4],[17.5,12],[7.5,20],[7.5,12],[11,12],[7.5,8.75],[7.5,16]]}];

export const SchemaOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SchemaOffIcon.displayName = "SchemaOffIcon";
