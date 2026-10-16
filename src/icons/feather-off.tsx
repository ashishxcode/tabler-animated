"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20l8 -8"}],["path",{"d":"M14 5v5h5"}],["path",{"d":"M9 11v4h4"}],["path",{"d":"M6 13v5h5"}],["path",{"d":"M6 13l3.502 -3.502m2.023 -2.023l2.475 -2.475"}],["path",{"d":"M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1"}],["path",{"d":"M11 18l3.499 -3.499m2.008 -2.008l2.493 -2.493"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,16],[16.5,7.5],[11,13],[8.5,15.5],[10,9],[17,7],[15,14]]}];

export const FeatherOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FeatherOffIcon.displayName = "FeatherOffIcon";
